// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfvgbo-xjpVv64UNBvC5g6xW614B8hrOs",
  authDomain: "e-commerce-9815a.firebaseapp.com",
  projectId: "e-commerce-9815a",
  storageBucket: "e-commerce-9815a.appspot.com",
  messagingSenderId: "842152810137",
  appId: "1:842152810137:web:78f34d2948c5fdb4478a08",
  measurementId: "G-2XJT30B810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);