import React from 'react';
import { signInWithGoogle } from "../auth/firebase";

const Login = () => {

    return (
        <div>
            <div>
                <button >Login</button>
                <button onClick={signInWithGoogle}>Enter with Google</button>
            </div>
        </div>
    )
}

export default Login