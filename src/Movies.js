import React from 'react';
import Movie from './Movie'
import './Movies.css';

class Movies extends React.Component {

  render() {
    return (
      <>

        {this.props.displayMovie ? <Movie movieDataArr={this.props.movieDataArr} /> : ''}

      </>
    );
  };
};
export default Movies;
