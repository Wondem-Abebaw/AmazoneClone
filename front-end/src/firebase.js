// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW7GmGK3HsN-7UQwvQIJWUGiir9MBBxGE",
  authDomain: "e-clone-574e0.firebaseapp.com",
  projectId: "e-clone-574e0",
  storageBucket: "e-clone-574e0.appspot.com",
  messagingSenderId: "774078861860",
  appId: "1:774078861860:web:3e1ad6df8e93eb31b0beb1",
  measurementId: "G-QCQBQTVJ44",
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = getAuth(app);
// export { auth, db };
