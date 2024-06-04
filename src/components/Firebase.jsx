// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuIseJWWy2dm8aJB4Dt02GM6jYdxcx_IQ",
  authDomain: "msc-project-9caec.firebaseapp.com",
  projectId: "msc-project-9caec",
  storageBucket: "msc-project-9caec.appspot.com",
  messagingSenderId: "77235081633",
  appId: "1:77235081633:web:9e7639cbf889e436207be0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
