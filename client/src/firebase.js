// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuzKDnRe6RVw5t26MTBN_GG95yAqF1D4",
  authDomain: "mern-real-estate-management.firebaseapp.com",
  projectId: "mern-real-estate-management",
  storageBucket: "mern-real-estate-management.appspot.com",
  messagingSenderId: "50396247269",
  appId: "1:50396247269:web:988de4ac48fb611366d00c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);