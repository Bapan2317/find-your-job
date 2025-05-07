import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { SiUfc } from 'react-icons/si';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, []);

    const authData = {
        user,
        setUser,
        register,
        login,
        logout,
        loading,
        setLoading,
        googleSignIn,
        forgetPassword,
        updateUser
    }
    console.log(user);
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;