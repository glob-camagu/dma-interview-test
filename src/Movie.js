import React from 'react';
import { Media } from 'react-bootstrap';
import { movieShape } from './shapes';

const Movie = ({ movie }) => (
  <Media>
    <Media.Body>
      <Media.Heading>{movie.title}</Media.Heading>
    </Media.Body>
  </Media>
);

Movie.propTypes = {
  movie: movieShape.isRequired
};

export default Movie;
