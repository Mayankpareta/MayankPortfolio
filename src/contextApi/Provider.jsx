import React, { useEffect, useState } from 'react';
import UserContext from './CreateContext';
import { ThermometerIcon } from 'lucide-react';

const UserContextProvider = ({children}) => {
    
    const [ theme , setTheme ] = useState(() => {
        const getTheme = localStorage.getItem('theme');
        return getTheme ? getTheme : 'light';
    })

    return (
        <UserContext.Provider value={{theme, setTheme}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;