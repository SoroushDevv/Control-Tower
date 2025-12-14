import React, { createContext, useContext, useEffect, useState } from "react";



export const SidebarContext = createContext()



export const SidebarProvider = ({ children }) => {
    const [isClose, setIsClose] = useState(() => {
        const save = localStorage.getItem("sidebar-close")
        return (save ? JSON.parse(save) : "false")

    })



    useEffect(() => {

        localStorage.setItem("sidebar-close",isClose)

    }, [isClose])


    const toggleSidebar = () => setIsClose(!isClose)



    return (
        <SidebarContext.Provider value={{ isClose,toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )


}


export const useSidebar = () => useContext(SidebarContext)


