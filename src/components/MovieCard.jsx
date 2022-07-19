import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const MovieCard = ({ item }) => {
    const [detail, setDetail] = useState("");
    const { title, vote_average, overview, poster_path, id } = item;
    // console.log(item.id);
    const navigate = useNavigate();
    const APP_KEY = process.env.REACT_APP_APP_KEY;
    const url3 = `https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}`
    
    const handleDetail = async () => {
        try {
            const getdetail = await axios.get(url3)
            setDetail(getdetail.data)
        } catch (error) {
            console.log(error);
        }
        navigate("movieDetail")
    }

    console.log(detail);



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