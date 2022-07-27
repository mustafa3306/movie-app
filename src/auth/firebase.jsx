import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAedEpxJ3nRKZ9shi23O6HJBJ4eQ70t4ZA",
    authDomain: "movie-app-981ff.firebaseapp.com",
    projectId: "movie-app-981ff",
    storageBucket: "movie-app-981ff.appspot.com",
    messagingSenderId: "924576200561",
    appId: "1:924576200561:web:73259f30d081fe0e62e8d0",
    measurementId: "G-XKPY9ZT97S"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const createUser = async(email,password,displayName) => {
  let userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await updateProfile(auth.currentUser, {
    displayName: displayName,
  });


}