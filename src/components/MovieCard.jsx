import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
    const { title, vote_average, overview, poster_path } = item;
    const navigate = useNavigate();
    
    const handleDetail = () => {
        navigate("movieDetail")
    }

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleDetail}>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} className="card-img-top" alt={title} />
            <div className="card-body" >
                <h5 className="card-title" > {title}</h5 >
                {/* <p className="card-text" >{overview}</p> */}
                < a href="#" className="btn btn-primary" > {vote_average}</a >
            </div >
        </div >

    )
}

export default MovieCard