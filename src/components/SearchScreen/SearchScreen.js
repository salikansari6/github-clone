import React,{useEffect,useContext} from 'react'
import BrandLogo from '../../assets/logos/BrandLogo'
import DashboardForm from '../Dashboard/DashboardForm/DashboardForm'
import './SearchScreen.css'
import { LoginContext } from '../../contexts/LoginContext';

const SearchScreen = () => {
    const {goToDashboard,setShowNavbar} = useContext(LoginContext) 

    if(goToDashboard){
        window.history.pushState(null,null,'/dashboard')
    }

    useEffect(() =>{
        setShowNavbar(false)
    },[setShowNavbar])

    return (
        <div className="search-screen">
            <div className="hero">
                <BrandLogo/>
                <p>Discover users and repositories from Github with a single click</p>
            </div>
            <DashboardForm homePage={true}/>
        </div>
    )
}

export default SearchScreen
