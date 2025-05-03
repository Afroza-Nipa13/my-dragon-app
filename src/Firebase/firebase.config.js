// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMPXdVtZEuR77Fy2n9m6zUmDbNSl9XojI",
  authDomain: "dragon-news-breaking-5b3f2.firebaseapp.com",
  projectId: "dragon-news-breaking-5b3f2",
  storageBucket: "dragon-news-breaking-5b3f2.firebasestorage.app",
  messagingSenderId: "389116997100",
  appId: "1:389116997100:web:165c00d86b47d0a04724c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;