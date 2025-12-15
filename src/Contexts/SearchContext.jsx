import { useContext,createContext,useState,useEffect } from "react";



const SearchContext = createContext()



export const SearchProvider = ({children}) => {

    const [query,setQuery] = useState()
    const [isSearchOpen,setIsSearchOpen] = useState(false)




  console.log("query:" ,query)


    return (
        <SearchContext.Provider value={{isSearchOpen,setIsSearchOpen,query,setQuery}}>
            {children}
        </SearchContext.Provider>
    )

}



export const useSearch = () => useContext(SearchContext)