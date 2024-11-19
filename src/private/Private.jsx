import React, { useContext } from 'react';
import { AuthContext } from './../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const location = useLocation()
    const {user, loader} =useContext(AuthContext);
    if(loader){
        return <div className='min-h-screen flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(!user){
      return  <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

export default Private;