// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2fde1.firebaseapp.com",
  projectId: "mern-estate-2fde1",
  storageBucket: "mern-estate-2fde1.appspot.com",
  messagingSenderId: "667378327669",
  appId: "1:667378327669:web:27a512f687ff31a542183c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
