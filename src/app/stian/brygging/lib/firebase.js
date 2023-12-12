// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6P0ShsrfFpB4yt2_l1zSgwd-tnKq_PdA",
  authDomain: "brygging-2249f.firebaseapp.com",
  projectId: "brygging-2249f",
  storageBucket: "brygging-2249f.appspot.com",
  messagingSenderId: "625742231863",
  appId: "1:625742231863:web:53df871cfd68df3d19c2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);

export default app;