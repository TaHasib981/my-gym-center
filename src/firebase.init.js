// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKP7i2xbt09nhtmLaoiw63qZVRl1-FYE",
  authDomain: "h-my-gym-center.firebaseapp.com",
  projectId: "h-my-gym-center",
  storageBucket: "h-my-gym-center.appspot.com",
  messagingSenderId: "754097794181",
  appId: "1:754097794181:web:01fc9465e59916f8b7cdec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
