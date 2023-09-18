// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuY4qwjv9dDGseWhYJ0zkHL6zW7M0j3LI",
  authDomain: "vite-contact-1cdb7.firebaseapp.com",
  projectId: "vite-contact-1cdb7",
  storageBucket: "vite-contact-1cdb7.appspot.com",
  messagingSenderId: "8227253935",
  appId: "1:8227253935:web:f3b50743992b53468fae5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);