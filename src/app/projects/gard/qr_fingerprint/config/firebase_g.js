
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2XBMjn4OlKym5zIILgC-9MaGlJqvpBFY",
  authDomain: "usermacaddr.firebaseapp.com",
  projectId: "usermacaddr",
  storageBucket: "usermacaddr.appspot.com",
  messagingSenderId: "1060522928703",
  appId: "1:1060522928703:web:823fcde922c85dd4d5668a",
  measurementId: "G-888TQX9XLV",
};

// Check if firebase is already initialized
//
//
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()[0];
const db = getFirestore(app);


export { db, app };
