// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNdGOz636IjOJluy_HIwaTv_hHXSxyl4",
  authDomain: "vfc-gener.firebaseapp.com",
  projectId: "vfc-gener",
  storageBucket: "vfc-gener.appspot.com",
  messagingSenderId: "890763783700",
  appId: "1:890763783700:web:4e25057bc9f6663eacc101",
  measurementId: "G-M1V3SZV20W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);