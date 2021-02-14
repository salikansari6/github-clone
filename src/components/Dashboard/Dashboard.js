import React,{useContext,useEffect} from 'react'
import SearchResults from './SearchResults/SearchResults';
import { LoginContext } from '../../contexts/LoginContext';
const Dashboard = () => {

    const {setIsLoggedIn} = useContext(LoginContext)

    useEffect(() =>{
        setIsLoggedIn(true)
    },[setIsLoggedIn])



    return (
        <div>
            {/* <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit}  /> */}
                <SearchResults                     
                />
        </div>
    )
}

export default Dashboard
