import { useContext, createContext, useEffect, useState } from "react";



const ThemeContext = createContext()




export const themeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme-mode") === "true" || window.matchMedia("(prefers-color-scheme-dark)").matches
    })

    useEffect(() => {

        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }


        localStorage.setItem("theme-mode", isDark)

    }, [isDark])


    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext.Provider value={{isDark,toggleTheme,setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )


}

export const useTheme = () => useContext(ThemeContext)