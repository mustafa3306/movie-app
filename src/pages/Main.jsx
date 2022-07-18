import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Main = () => {
    const [movie, setMovie] = useState([]);

    const APP_KEY = process.env.REACT_APP_APP_KEY;
    // const url = `https://api.themoviedb.org/3/discover/movie?api_key=8ce831c185de710fb76fb0da9816d7fb`
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APP_KEY}`

    const getMovie = async () => {
        try {
            const getdata = await axios.get(url)
            setMovie(getdata.data.results)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovie();
    }, [])
    // console.log(movie);

    return (
        <div >
            <nav class="navbar navbar-light bg-secondary justify-content-center">
                <form class="form-inline d-flex gap-2">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            <div className='d-flex flex-wrap'>
            {movie?.map((item, index) => <MovieCard item={item} key={index} />)}
            </div>
        </div>
    )
}

export default Main