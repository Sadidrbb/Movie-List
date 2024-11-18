import React from "react";

const Movie = (props) => {
    return (
        <>
            {/* {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="Movie Films"></img>
                </div>
            ))} */}

            <div className="container">
                <h2 className="my-3 text-danger">Movie List</h2>

                <div className="row">
                    {props.movies.map((movie, index) => (
                    <div key={index} className="col-3 p-3">

                        <div className="card">
                            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />

                            <div className="card-body text-white text-center" style={{ backgroundColor: '#1E201E' }}>
                                <p className="card-text">{movie.Title}</p>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Movie

