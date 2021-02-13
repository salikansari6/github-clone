import React,{useEffect} from 'react'
import SearchResults from './SearchResults/SearchResults';

const Dashboard = ({debouncedForm,setIsLoggedIn}) => {
    useEffect(() =>{
        setIsLoggedIn(true)
    },[setIsLoggedIn])
    return (
        <div>
                <SearchResults 
                    searchTerm={debouncedForm.searchTerm} 
                    choice={debouncedForm.searchParam}        
                    
                />
        </div>
    )
}

export default Dashboard
