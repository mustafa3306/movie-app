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
  apiKey: process.env.REACT_FIRE_API,
  authDomain: process.env.REACT_AUTH_DOM,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
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

