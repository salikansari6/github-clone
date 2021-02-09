import React from 'react'
import './DashboardForm.css'

const DashboardForm = ({form,setForm,handleSubmit}) => {
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
             <form className="dashboard__form" onSubmit={handleSubmit}>
                <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange} placeholder="Search..." />
                <input type="radio" name="searchParam" value="user" 
                    checked={"user" === searchParam} 
                    onChange={handleChange} 
                    id="user"
                />
                <label htmlFor="user">Search User</label>
                <input type="radio" name="searchParam" value="repo" 
                    checked={"repo" === searchParam} 
                    onChange={handleChange} 
                    id="repo"
                />                
                <label htmlFor="repo">Search Repository</label>
                <button type="submit" disabled={!searchTerm}>Search</button>
            </form>
    )
}

export default DashboardForm
