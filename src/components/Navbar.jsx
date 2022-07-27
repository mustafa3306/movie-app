import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {MovieContext} from "../context/AuthContext";

const Navbar = () => {

    const {currentUser}=useContext(MovieContext)

    return (
        <nav className="navbar navbar-light bg-primary justify-content-between text-white">
            <h1 className="navbar-brand mx-4 text-white d-5">React Movie App</h1>
            <div className='mx-4'>
                {currentUser ?
                <>
                <Link to="login" className="btn btn-outline-light bg-primary text-white mx-2" type="submit">Login</Link>
                <Link to="register" className="btn btn-outline-light bg-primary text-white" type="submit">Register</Link>
                </>
                :
                <>
                <h1>{currentUser?.displayName} buradayım</h1>
                <button onClick={null} className="btn btn-outline-light bg-primary text-white mx-2" type="submit">Logout</button>
                </>
                }
            </div>
        </nav>
    )
}

export default Navbar