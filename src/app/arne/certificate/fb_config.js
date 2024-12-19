/*
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

export const db = getFirestore(app) ; */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const echo_firebaseConfig = {
    apiKey: "AIzaSyBGTLIqBRpFC1qPNJsFyP2v1zUT1uSTVtI",
    authDomain: "echo-attest.firebaseapp.com",
    databaseURL: "https://echo-attest-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "echo-attest",
    storageBucket: "echo-attest.firebasestorage.app",
    messagingSenderId: "824360539665",
    appId: "1:824360539665:web:7273f3916dd285218143b0"
};

const echo_app = initializeApp(echo_firebaseConfig);
export const auth = getAuth(echo_app);

export const db = getFirestore(echo_app);