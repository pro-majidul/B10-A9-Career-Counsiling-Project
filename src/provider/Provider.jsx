import { GoogleAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()
const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const userLogOut = () => {
    return signOut(auth)
  }

  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo,
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false)
      } else (
        setUser(null)
      )
    })

    return () => {
      unSubscribe();
    }
  }, [])

  const infoData = {
    googleLogin,
    user,
    setUser,
    loader,
    UserLogin,
    signUpUser,
    updateUserProfile,
    userLogOut

  }
  return (
    <AuthContext.Provider value={infoData}>
      {children}
    </AuthContext.Provider>

  );
};

export default Provider;