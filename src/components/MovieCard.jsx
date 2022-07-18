import React from 'react'

const MovieCard = ({ item }) => {
    const { title, backdrop_path, vote_average, overview } = item
    console.log(item)
    return (
        <div className="card" style={{ width: '18rem' }} >
            <img src={'https://image.tmdb.org/t/p/original' + backdrop_path} className="card-img-top" alt="..." />
            <div className="card-body" >
                <h5 className="card-title" > {title}</h5 >
                <p className="card-text" > Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                < a href="#" className="btn btn-primary" > {vote_average}</a >
            </div >
        </div >

    )
}

export default MovieCard