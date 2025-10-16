// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7i4L9RXAZg_odRaawR6cnASHO6oOcLZI",
  authDomain: "email-password-auth-ea750.firebaseapp.com",
  projectId: "email-password-auth-ea750",
  storageBucket: "email-password-auth-ea750.firebasestorage.app",
  messagingSenderId: "499532490699",
  appId: "1:499532490699:web:d90cc7363914b71c21384e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);