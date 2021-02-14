import React,{useContext,useEffect} from 'react'
import SearchResults from './SearchResults/SearchResults';
import './Dashboard.css'
import { LoginContext } from '../../contexts/LoginContext';
const Dashboard = () => {

    const {setIsLoggedIn,goToDashboard} = useContext(LoginContext)


    useEffect(() =>{
        setIsLoggedIn(true)
    },[setIsLoggedIn])



    return (
        <div className={ goToDashboard? "dashboard":'' }>
            {/* <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit}  /> */}
                <SearchResults                     
                />
        </div>
    )
}

export default Dashboard
