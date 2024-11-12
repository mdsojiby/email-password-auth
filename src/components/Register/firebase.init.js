// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzggjXo8k_xPwluACOkxzLLsbvofwXjYE",
  authDomain: "email-password-auth-968cd.firebaseapp.com",
  projectId: "email-password-auth-968cd",
  storageBucket: "email-password-auth-968cd.firebasestorage.app",
  messagingSenderId: "680945093873",
  appId: "1:680945093873:web:9ee20756f6d76aa36e6d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);