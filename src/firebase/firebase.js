// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARm6WBB5Cf2zt44VNwhDQsAcZJ0XjdDQs",
  authDomain: "app-react-coderhouse-c176a.firebaseapp.com",
  projectId: "app-react-coderhouse-c176a",
  storageBucket: "app-react-coderhouse-c176a.appspot.com",
  messagingSenderId: "146881908428",
  appId: "1:146881908428:web:a1b838c99c3c843fe3fc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);