import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
// import { toastErrorNotify, toastWarnNotify } from "../helpers/ToastNotify";


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

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });
        navigate('/');
    } catch (error) {
        console.log(error)
    }
};

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
        console.log(userCredential);
    } catch (error) {
        console.log(error)
    }
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
        } else {
            setCurrentUser(false);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};

export const signUpWithProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
};

export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // toastWarnNotify('Please check your mail box!');
            alert("Please check your mail box!");
        })
        .catch((err) => {
            // toastErrorNotify(err.message);
            alert(err.message);
        });
};

