import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { logOut } from '../auth/firebase';
import { MovieContext } from '../context/AuthContext';

const Navbar = () => {

    const {currentUser}=useContext(MovieContext)
    console.log(currentUser)
    return (
        <nav className="navbar navbar-light bg-primary justify-content-between text-white">
            <h1 className="navbar-brand mx-4 text-white d-5">React Movie App</h1>
            <div className='mx-4'>
                {currentUser ?
                (<>
                <h3>{currentUser.displayName}</h3>
                <button onClick={()=>logOut()} className="btn btn-outline-light bg-primary text-white mx-2" type="submit">Logout</button>
                </>)
                :
                (<>
                <Link to="login" className="btn btn-outline-light bg-primary text-white mx-2" type="submit">Login</Link>
                <Link to="register" className="btn btn-outline-light bg-primary text-white" type="submit">Register</Link>
                </>)
                }
            </div>
        </nav>
    )
}

export default Navbar