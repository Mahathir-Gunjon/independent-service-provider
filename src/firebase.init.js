// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzkKH6VsYjtRW-DhL-tz8mh3H77V8Bjc",
  authDomain: "sz-photographs.firebaseapp.com",
  projectId: "sz-photographs",
  storageBucket: "sz-photographs.appspot.com",
  messagingSenderId: "463050459789",
  appId: "1:463050459789:web:962a2ba420e8e7f05030c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;