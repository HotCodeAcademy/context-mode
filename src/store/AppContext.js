import {createContext, useContext, useState} from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)