import React from 'react'
import {useLocation} from "react-router-dom"

const MovieDetail = ({}) => {
    const location = useLocation();
    console.log(location.state.title);
    return (
        <div>
            
        </div>
    )
}

export default MovieDetail