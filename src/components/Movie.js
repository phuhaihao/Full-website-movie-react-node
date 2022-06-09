import React from 'react';

class Movie extends React.Component {
    
    render(){
        const movies = this.props.movie.movies;
        return(
                movies.map((item, index) => {
                    return <div   
                        className="col-lg-3 movie-screen"
                        key={item.id}
                    >
                        <a href={item.video}>
                        <img src={item.img}
                         alt="#"
                        />
                        </a>
                        <p className="d-flex justify-content-center title-movie">{item.name}</p>
                    </div>
                })
        )
    }
}
export default Movie;