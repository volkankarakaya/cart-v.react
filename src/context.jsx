import {useEffect,useContext, createContext} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const greeting = 'Hello'
    return <AppContext.Provider value={{greeting}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
   return useContext(AppContext)
}

export default AppProvider