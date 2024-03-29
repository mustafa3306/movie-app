import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import VideoSection from '../components/VideoSection';

const MovieDetail = () => {
    const [detail, setDetail] = useState('');
    const [videoKey, setVideoKey] = useState();
    const { id } = useParams();
    const API_KEY = process.env.REACT_APP_APP_KEY;
    const url3 = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const {
        title,
        poster_path,
        overview,
        vote_average,
        release_date,
        vote_count,
    } = detail;
    const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
    const defaultImage =
        'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

    const postDetails = async () => {
        try {
            const getDetail = await axios.get(url3)
            setDetail(getDetail.data)
            console.log(detail);
        } catch (error) {
            console.log(error);
        }
    };

    const getVideo = async () => {
        try {
            await axios.get(videoUrl)
                .then((res) => setVideoKey(res.data.results[0].key))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        postDetails();
        getVideo()
    }, [videoUrl])

    return (
        <div className="container py-5">
            <h1 className="text-center">{title}</h1>
            {videoKey && <VideoSection videoKey={videoKey} />}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={poster_path ? baseImageUrl + poster_path : defaultImage}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column ">
                        <div className="card-body">
                            <h5 className="card-title">Overview</h5>
                            <p className="card-text">{overview}</p>
                        </div>
                        <ul className="list-group ">
                            <li className="list-group-item">
                                {'Release Date : ' + release_date}
                            </li>
                            <li className="list-group-item">{'Rate : ' + vote_average}</li>
                            <li className="list-group-item">
                                {'Total Vote : ' + vote_count}
                            </li>
                            <li className="list-group-item">
                                <Link to={-1} className="card-link">
                                    Go Back
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail