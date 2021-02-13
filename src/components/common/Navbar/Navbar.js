import React from 'react'
import './Navbar.css'
import BrandLogo from '../../../assets/logos/BrandLogo';
import DashboardForm from '../../Dashboard/DashboardForm/DashboardForm';

const Navbar = ({form,setForm,handleSubmit,isLoggedIn}) => {


    return (
        <nav className="navbar navbar-dark py-3">
            <div className="container">
                <span className="navbar-brand">
                <BrandLogo/>
                </span>
                {
                isLoggedIn &&
                <DashboardForm form={form} setForm={setForm} handleSubmit={handleSubmit}/>
                }
            </div>
        </nav>
    )
}

export default Navbar
