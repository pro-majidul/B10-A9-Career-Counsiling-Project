import React, { createContext } from 'react';
  export  const AuthContext = createContext()
const Provider = ({children}) => {
    return (
       <AuthContext.Provider>
        {children}
       </AuthContext.Provider>
        
    );
};

export default Provider;