import React from 'react';
import { auth, provider } from '../auth/firebase'

const Login = ({ setUser }) => {
    const logIn = () => {
        auth.signInWithPopup(provider)
            .catch((error) => alert(error.message))
    }
    return (
        <div>
            <div>
                <form action="">

                </form>
                <button>Login</button>
                <button onClick={logIn}>Enter with Google</button>
            </div>
        </div>
    )
}

export default Login