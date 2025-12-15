import { useContext,createContext,useState,useEffect } from "react";



const SearchContext = createContext()



export const SearchProvider = ({children}) => {

    const [query,setQuery] = useState()
    const [isSearchClose,setIsSearchClose] = useState(false)







    return (
        <SearchContext.Provider value={{isSearchClose,setIsSearchClose,query,setQuery}}>
            {children}
        </SearchContext.Provider>
    )

}



export const useSearch = () => useContext(SearchContext)