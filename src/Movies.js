import React from 'react';
import './Movies.css';

class Movies extends React.Component {

  render() {
    console.log(this.props.movieDataArr);
    return (
      <>

      <div className='movieDiv'>
        {this.props.movieDataArr.length > 0 ? this.props.movieDataArr.map((value, idx) => (
          <div key={idx}>
             <h2>Title: {value.title}</h2>
            <p>Overview: {value.overview}</p>
            <p>Release Date: {value.release_date}</p>
            <img src={value.poster_path} alt='Movie Poster!'/>
           
          </div>
        ))
          : ''}
      </div>

      </>
    );
  };
};
export default Movies;
