// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW9ICshCtIqMhVe6B5mK0FYWEdWzcFp3w",
    authDomain: "genius-car-services-a4163.firebaseapp.com",
    projectId: "genius-car-services-a4163",
    storageBucket: "genius-car-services-a4163.appspot.com",
    messagingSenderId: "830544483463",
    appId: "1:830544483463:web:8172dff9dd8c0fabe29422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;