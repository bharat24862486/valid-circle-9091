import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {


    //   apiKey: "AIzaSyCKAHylaBbfbdIOzDxQR558w6m5P-iAZXk",
    //   authDomain: "first-backend-c79e1.firebaseapp.com",
    //   projectId: "first-backend-c79e1",
    //   storageBucket: "first-backend-c79e1.appspot.com",
    //   messagingSenderId: "645329550531",
    //   appId: "1:645329550531:web:c3e9fbe91a944368d8b676",
    //   measurementId: "G-0WER38B2BX"
    apiKey: "AIzaSyCKAHylaBbfbdIOzDxQR558w6m5P-iAZXk",
    authDomain: "first-backend-c79e1.firebaseapp.com",
    projectId: "first-backend-c79e1",
    storageBucket: "first-backend-c79e1.appspot.com",
    messagingSenderId: "645329550531",
    appId: "1:645329550531:web:3f67c5d61dc904e5d8b676",
    measurementId: "G-G6YCEG34H5"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)