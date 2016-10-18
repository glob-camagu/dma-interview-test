import React, { PropTypes } from 'react';
import { Media } from 'react-bootstrap';
import Movie from './Movie';
import { movieShape } from './shapes';

const MovieList = ({ movies }) => (
  <Media.List>
    {movies.map(movie =><Movie movie={movie} key={movie.slug} />)}
  </Media.List>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieShape).isRequired
};

export default MovieList;
