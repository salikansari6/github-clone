import React,{useState,useEffect,useContext} from 'react'
import './SearchResults.css'
import UserList from '../SearchResults/UserList/UserList'
import RepoList from '../SearchResults/RepoList/RepoList'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import {fetchUserDetails,fetchUsers,fetchRepositories} from '../../../services/api'
import { DebouncedFormContext } from '../../../contexts/DebouncedFormContext';
import formatNumber from '../../../utilities/formatNumber'

const SearchResults = ({}) => {
    const [users, setUsers] = useState([]) 
    const [repositories, setRepositories] = useState([])
    const [page,setPage] = useState(1) 
    const [totalResults,setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)
    const [debouncedForm] = useContext(DebouncedFormContext)

    const {searchTerm,searchParam} = debouncedForm
    const choice = searchParam

    useEffect(() =>{
        setUsers([])
        setRepositories([])
        // setPage(1)
    },[searchTerm,searchParam,setUsers,setRepositories])

    useEffect(() =>{
        if(searchParam === "users"){  
            // setUsers([])
            setRepositories([])
            let promises = []
            setLoading(true)
            const parameters = {
                'q':searchTerm,
                'per_page' : 10,
                'page': page
            }
            fetchUsers(parameters)
            .then((data)=>{
                setTotalResults(data.total_count)
                data.items.forEach(user =>{
                promises.push(fetchUserDetails(user.url))
            })
            return Promise.all(promises)
        })
        .then(newUsers =>{
            setUsers((prevUser) => [...prevUser,...newUsers])            
            setLoading(false)
            
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
        }

        else if(searchParam === "repositories"){
            setLoading(true)
            setUsers([])
            const parameters = {
                'q':searchTerm,
                'per_page' : 10,
                'page':page,
                // 'sort':'stars'
            }
            fetchRepositories(parameters)
            .then(newRepositories => {
                setTotalResults(newRepositories.total_count)
                if(newRepositories.items){
                    setRepositories((prevRepos) => [...prevRepos,...newRepositories.items])
                }
                setLoading(false)
            } )
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
        }


    },[page,searchTerm,searchParam,setRepositories,setUsers])
    
    const handleScroll = (event) =>{
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget
        console.log(scrollTop)
        if(scrollTop + clientHeight === scrollHeight){
                setPage(prev => prev+1)

        }
    }

    
    return(
        <div className="search-results" onScroll={handleScroll} >
            <div className="no-of-results h2"><b>{totalResults && formatNumber(totalResults)}</b> {choice} found</div>
            <div className="results" >
                {choice === "users" && <UserList results={users} loading={loading}/>}
                {choice === "repositories" && <RepoList results={repositories} loading={loading} /> }
            </div>
                { loading && <LoadingSpinner/>}
        </div>
    )

}

export default SearchResults
