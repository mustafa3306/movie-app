import React, { Children, createContext } from 'react'
import { useState } from 'react';


export const MovieContext = createContext();

const AuthContext = ({children}) => {
  const [currentUser, setCurrentUser] = useState(false)

  return (
    <MovieContext.Provider value={currentUser}>
        {children}
    </MovieContext.Provider>
  )
}

export default AuthContext