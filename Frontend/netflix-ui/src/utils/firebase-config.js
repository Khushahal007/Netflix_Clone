import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQwXtauRTRTGDs7_LfnZs7yhx09M5EdrM",
  authDomain: "react-netflix-e5ab8.firebaseapp.com",
  projectId: "react-netflix-e5ab8",
  storageBucket: "react-netflix-e5ab8.appspot.com",
  messagingSenderId: "577648740972",
  appId: "1:577648740972:web:0e3aa521017bc24c4ba649",
  measurementId: "G-94D8KN65Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);