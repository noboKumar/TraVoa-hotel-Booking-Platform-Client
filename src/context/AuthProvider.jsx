import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // set user name and photo
  const updateUser = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  // sign out user
  const logOutUser = () => {
    return signOut(auth);
  };

  // log in user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const userInfo = {
    createUser,
    updateUser,
    user,
    setUser,
    loading,
    setLoading,
    logOutUser,
    logInUser,
    googleLogin,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
