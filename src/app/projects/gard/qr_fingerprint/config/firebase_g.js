
// Import the functions you need from the SDKs
import { initializeApp, getApps } from "firebase/app";
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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app); // Firestore database


export { db, app };
