// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYiUNVIehk_hJj3GXsE-gU8SNUMsnGFR0",
    authDomain: "career-counsiling-projects.firebaseapp.com",
    projectId: "career-counsiling-projects",
    storageBucket: "career-counsiling-projects.firebasestorage.app",
    messagingSenderId: "604151909009",
    appId: "1:604151909009:web:9cb8653864b2b953288d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);