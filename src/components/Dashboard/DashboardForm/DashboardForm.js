import React from 'react'
import './DashboardForm.css'
import SearchIcon from '../../../assets/icons/SearchIcon';


const DashboardForm = ({form,setForm,handleSubmit,homePage}) => {
    //Changing form state when an input field changes
    const handleChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    //Destructuring from form object
    const { searchTerm , searchParam } = form

    return (
             <form className="dashboard__form" style={{width:homePage ? '40%' : '60%'}}  onSubmit={handleSubmit}>
                 <div className="search">
                    <input type="text" name="searchTerm" value={searchTerm} className="search__input" onChange={handleChange} placeholder="Please enter username or repository name" />
                    <button type="submit" disabled={!searchTerm} className="search__button"><SearchIcon/></button>
                 </div>
                 <div className="radio-wrapper">
                    <label className="radio" style={{display: homePage ? 'flex' : 'inline-flex'}} htmlFor="users">
                        <input type="radio" name="searchParam" value="users" 
                            checked={"users" === searchParam} 
                            onChange={handleChange} 
                            id="users"
                            className="radio__input"
                        />
                        <div className="custom-radio"></div>
                        Search for users
                    </label>
                    <label className="radio" style={{display: homePage ? 'flex' : 'inline-flex'}} htmlFor="repositories">
                        <input type="radio" name="searchParam" value="repositories" 
                            checked={"repositories" === searchParam} 
                            onChange={handleChange} 
                            id="repositories"
                            className="radio__input"
                        />
                        <div className="custom-radio"></div>
                        Search for repositories
                    </label>
                </div>
            </form>
    )
}

export default DashboardForm
