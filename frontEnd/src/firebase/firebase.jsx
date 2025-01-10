import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR3GVhoUvf7oh6VR_dHBgWEZHxXRgM_nI",
  authDomain: "url-shortener-6dc1e.firebaseapp.com",
  databaseURL: "https://url-shortener-6dc1e-default-rtdb.firebaseio.com",
  projectId: "url-shortener-6dc1e",
  storageBucket: "url-shortener-6dc1e.appspot.com",
  messagingSenderId: "483443265847",
  appId: "1:483443265847:web:ab1278060a152dc76a4ab2",
  measurementId: "G-XF7Z57LK2N",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    return set(ref(database, key), data);
  };

  const signupWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const logoutUser = () => {
    return signOut(firebaseAuth);
  };

  const getCurrentUser = () => {
    return firebaseAuth.currentUser;
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUser, putData, signupWithGoogle, signinUser, logoutUser, getCurrentUser, user }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};