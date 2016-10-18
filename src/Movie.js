import React from 'react';
import { Media } from 'react-bootstrap';
import { movieShape } from './shapes';

const Movie = ({ movie }) => (
  <Media>
    <Media.Left>
      <img src={movie.image} alt={movie.title} width={195} height={292} />
    </Media.Left>
    <Media.Body>
      <Media.Heading>{movie.title}</Media.Heading>
    </Media.Body>
  </Media>
);

Movie.propTypes = {
  movie: movieShape.isRequired
};

export default Movie;
