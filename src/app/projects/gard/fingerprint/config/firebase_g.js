// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore database
const analytics = getAnalytics(app);

export { db, analytics };
