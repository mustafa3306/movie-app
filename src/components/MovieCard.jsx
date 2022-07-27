import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../auth/firebase';
// import { toastWarnNotify } from '../helpers/ToastNotify';
import { MovieContext } from '../context/AuthContext';



const MovieCard = ({ item }) => {
    const { currentUser } = useContext(MovieContext);
    const navigate = useNavigate();
    const { title, poster_path, vote_average, overview, id } = item
    // console.log(item);
    const defaultImage =
        'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
    const setVoteClass = (vote) => {
        if (vote > 8) {
            return 'green';
        } else if (vote >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    };
    return (
        <div
            onClick={() => {
                !createUser && alert('Please log in to see detail');
                navigate('/movieDetail/' + id);
            }}
            className="movie" style={{ width: '18rem' }} >
            <img src={poster_path ? 'https://image.tmdb.org/t/p/original' + poster_path : defaultImage} className="card-img-top" alt={title} />
            <div className="d-flex align-items-baseline justify-content-between p-1 text-white" >
                <h5 className="card-title" > {title}</h5 >
                {currentUser && (
                    <span className={`tag ${setVoteClass(vote_average)}`}>
                        {vote_average}
                    </span>
                )}
                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{overview} </p>
                </div>
            </div >
        </div >

    )
}

export default MovieCard