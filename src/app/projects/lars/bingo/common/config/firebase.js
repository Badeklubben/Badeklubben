// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMfFsSVGcmiR7e1cBMHyTcM-ee4H5aYDY",
  authDomain: "bingo-d1c48.firebaseapp.com",
  projectId: "bingo-d1c48",
  storageBucket: "bingo-d1c48.firebasestorage.app",
  messagingSenderId: "534828964944",
  appId: "1:534828964944:web:f448e54e967b139c734555",
  measurementId: "G-JGKGB2SQG9"
};


let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // Use the existing app
}

export const auth = getAuth(app);
export const db = getFirestore(app);
