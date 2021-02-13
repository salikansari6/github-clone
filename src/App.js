import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Route from './components/Route';
import Login from './components/Login/Login';
import LoginCallback from './components/LoginCallback';
import Navbar from './components/common/Navbar/Navbar';
import { useState, useEffect } from 'react';
import SearchScreen from './components/SearchScreen/SearchScreen';

function App() {
  //Lifted state from DashboardForm component so other components can share data  
    //State for handling form fields along with initial values
    const [goToDashboard,setGoToDashBoard] = useState(false)
    const [showNavbar,setShowNavbar] = useState(true)
    const [form ,setForm] = useState({
      searchTerm:'',
      searchParam:'users'
  })

  //Added debounced state to only run side effect when submit button is clicked
  const [debouncedForm, setDebouncedForm] = useState({
      searchTerm:'',
      searchParam:'users'
  })

  //Fetching search state from localStorage on page load
  useEffect(() =>{
      const formState = localStorage.getItem('formState');
      if(formState){
          setDebouncedForm(JSON.parse(formState))
          setForm(JSON.parse(formState))
      }
      
  },[])
  
  //Side-effect for persisting search state to localStorage  
  useEffect(() => {
      localStorage.setItem('formState',JSON.stringify(debouncedForm))
      // window.history.pushState(null,null,'/dashboard')
  },[debouncedForm])

  const handleSubmit = (event) =>{
      event.preventDefault();
      setDebouncedForm({
          searchTerm:form.searchTerm,
          searchParam:form.searchParam
      });
      setGoToDashBoard(true)
      setShowNavbar(true)
  }

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const {searchParam,searchTerm} = debouncedForm;

  console.log(window.location.pathname)

  return (
    <div className="App container-fluid p-0">
      {
        showNavbar &&
        <Navbar isLoggedIn={isLoggedIn} form={form} setForm={setForm} handleSubmit={handleSubmit}/>
      }
      <Route path="/">
        <Login />
      </Route>
      <Route path="/search-screen">
        <SearchScreen form={form}
         searchParam={searchParam}
         searchTerm={searchTerm} 
         setForm={setForm} 
         goToDashboard={goToDashboard}
         setShowNavbar={setShowNavbar}
         handleSubmit={handleSubmit}/>

      </Route>
      <Route path="/dashboard">
        <Dashboard 
          setIsLoggedIn={setIsLoggedIn} 
          debouncedForm={debouncedForm} 
          form={form} 
          setForm={setForm} 
          handleSubmit={handleSubmit}/>   
      </Route>
      <Route path="/login/callback">
        <LoginCallback />
      </Route>
    </div>
  );
}

export default App;
