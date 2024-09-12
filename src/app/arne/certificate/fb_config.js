// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT1GukIvoxK8CuNKLqcQ27AIooo14Szh0",
    authDomain: "badeklubben-attest.firebaseapp.com",
    projectId: "badeklubben-attest",
    storageBucket: "badeklubben-attest.appspot.com",
    messagingSenderId: "957452398710",
    appId: "1:957452398710:web:c4be4877122a1370a16f57"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);