// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByugXTKja5IJD20DGQGUzxKcjnQJggOLQ",
    authDomain: "news-vite-app.firebaseapp.com",
    projectId: "news-vite-app",
    storageBucket: "news-vite-app.appspot.com",
    messagingSenderId: "30598598169",
    appId: "1:30598598169:web:c3830467e812615aeba488",
    measurementId: "G-05S704E5PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);