// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUpqW6Dfk42ca3LzY52xOqYU5F68S1Ecw",
  authDomain: "tripmate-3af88.firebaseapp.com",
  projectId: "tripmate-3af88",
  storageBucket: "tripmate-3af88.appspot.com",
  messagingSenderId: "256133051078",
  appId: "1:256133051078:web:1a04a03bcfc7a5e5d7ddc7",
  measurementId: "G-HQ4WMV3G0M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
 