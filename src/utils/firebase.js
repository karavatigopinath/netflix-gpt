// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpwiXBNWvgB6Vl5Wo3CXqvbzKXuRRUMI",
  authDomain: "netflixgpt-7aa81.firebaseapp.com",
  projectId: "netflixgpt-7aa81",
  storageBucket: "netflixgpt-7aa81.appspot.com",
  messagingSenderId: "427399895700",
  appId: "1:427399895700:web:44d45f6df02e79d0ecf281",
  measurementId: "G-SEZF7YKGTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();