import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Route from './components/Route';


function App() {
  return (
    <div className="App">
      <Route path="/">
      {/*TODO: Make Login Component*/}
      Note: Append /dashboard to the URL to view the dashboard component
      </Route>
      <Route path="/dashboard">
        <Dashboard/>   
      </Route>
    </div>
  );
}

export default App;
