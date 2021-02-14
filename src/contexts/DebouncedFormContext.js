import React,{createContext,useState} from 'react'

export const DebouncedFormContext = createContext() 

const DebouncedFormContextProvider = ({children}) =>{
    const [debouncedForm, setDebouncedForm] = useState({
        searchTerm:'',
        searchParam:'users'
    })
    


return(
    <DebouncedFormContext.Provider value={[debouncedForm,setDebouncedForm]}>
        {children}
    </DebouncedFormContext.Provider>
)

}

export default DebouncedFormContextProvider