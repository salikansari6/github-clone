import React,{useEffect} from 'react'
import BrandLogo from '../../assets/logos/BrandLogo'
import DashboardForm from '../Dashboard/DashboardForm/DashboardForm'
import './SearchScreen.css'


const SearchScreen = ({form ,setForm, handleSubmit,goToDashboard,setShowNavbar}) => {
    if(goToDashboard){
        window.location.pathname = '/dashboard'
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
            <DashboardForm homePage={true} form={form} setForm={setForm} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default SearchScreen
