import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};