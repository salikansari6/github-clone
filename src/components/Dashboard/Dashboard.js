import React,{useState} from 'react'
import DashboardForm from './DashboardForm/DashboardForm';

const Dashboard = () => {
    //Lifted state from DashboardForm component so other components can share data  
    //State for handling form fields along with initial values
    const [form ,setForm] = useState({
        searchTerm:'',
        searchParam:'user'
    })

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(form)
        console.log("submit working")
        //TODO: Implement REST API CALL
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
            {/*TODO Create UI Component to render data*/}
        </div>
    )
}

export default Dashboard
