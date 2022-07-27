import { createContext, useEffect } from 'react'
import { useState } from 'react';
import { userObserver } from '../auth/firebase';


export const MovieContext = createContext();

const AuthContext = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false)
    // console.log(currentUser)
    useEffect(() => {
      userObserver(setCurrentUser)
    }, [])
    
  return (
    <MovieContext.Provider value={{currentUser}}>
        {children}
    </MovieContext.Provider>
  )
}

export default AuthContext