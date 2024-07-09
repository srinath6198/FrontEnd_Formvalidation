// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // For Firestore (if needed)
import { getStorage } from "firebase/storage"; // For Firebase Storage (if needed)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNo_aGnVE1wEp4U1RUYnWiwxGb8mFvxKc",
  authDomain: "loginsignup-8d312.firebaseapp.com",
  projectId: "loginsignup-8d312",
  storageBucket: "loginsignup-8d312.appspot.com",
  messagingSenderId: "693887195835",
  appId: "1:693887195835:web:4460cb55a3c837b3d2e79e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore and Storage instances (if needed)
const db = getFirestore(app);
const storage = getStorage(app);

// Google Sign-In Function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('User Info:', user);
    // Add additional logic here, such as saving user info to Firestore
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

// Export Auth, Firestore, Storage, and signInWithGoogle for use in other parts of your app
export { auth, db, storage, signInWithGoogle };
