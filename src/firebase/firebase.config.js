// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTsmXM8S_Q90NYtnLtU81x3LeN6sBhl-E",
  authDomain: "brand-shop-client-d5117.firebaseapp.com",
  projectId: "brand-shop-client-d5117",
  storageBucket: "brand-shop-client-d5117.appspot.com",
  messagingSenderId: "660460134930",
  appId: "1:660460134930:web:a2bfe56573ded7bedbeecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
