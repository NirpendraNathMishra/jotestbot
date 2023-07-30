// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGmKwkKSxX0AnvdmING_QS88dZ-g6VGRs",
    authDomain: "testgenbotuserid.firebaseapp.com",
    projectId: "testgenbotuserid",
    storageBucket: "testgenbotuserid.appspot.com",
    messagingSenderId: "959355224700",
    appId: "1:959355224700:web:0ff59f12b2cfdde68f7ff9",
    measurementId: "G-9VCD29QTV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
