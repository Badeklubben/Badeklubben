// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvkVVLbizPDnQqFLdV7i18iiQkbI9LZEw",
    authDomain: "badeklubb-svt.firebaseapp.com",
    projectId: "badeklubb-svt",
    storageBucket: "badeklubb-svt.appspot.com",
    messagingSenderId: "639226580260",
    appId: "1:639226580260:web:31f01a308ab4b10eb9b7b1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);