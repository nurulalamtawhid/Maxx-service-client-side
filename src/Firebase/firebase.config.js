// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_KEY,
  authDomain: process.env.REACT_APP_AUTH_D,
  projectId: process.env.REACT_APP_P_ID,
  storageBucket: process.env.REACT_APP_S_Bucket,
  messagingSenderId: process.env.REACT_APP_MS_ID,
  appId: process.env.REACT_APP_APP_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;