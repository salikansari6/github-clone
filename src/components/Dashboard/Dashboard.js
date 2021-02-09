import React,{useState} from 'react'
import DashboardForm from './DashboardForm/DashboardForm';
import SearchResults from './SearchResults/SearchResults';

const Dashboard = () => {
    //Lifted state from DashboardForm component so other components can share data  
    //State for handling form fields along with initial values
    const [form ,setForm] = useState({
        searchTerm:'',
        searchParam:'users'
    })

    //Added debounced state to only run side effect when submit button is clicked
    const [debouncedForm, setDebouncedForm] = useState({
        searchTerm:'',
        searchParam:'users'
    })

    const handleSubmit = (event) =>{
        event.preventDefault();
        setDebouncedForm({
            searchTerm:form.searchTerm,
            searchParam:form.searchParam
        })
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
            <SearchResults searchTerm={debouncedForm.searchTerm} choice={debouncedForm.searchParam}/>
        </div>
    )
}

export default Dashboard
