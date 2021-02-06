import React from 'react'

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
        <div>
             <form onSubmit={handleSubmit}>
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
        </div>
    )
}

export default DashboardForm
