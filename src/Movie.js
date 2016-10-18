import React from 'react';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import { movieShape } from './shapes';

const formatRunTime = (runTime) => {
  const diff = moment(runTime * 1000).diff(moment(0), 'hours', true);
  const hrs = Math.floor(diff);
  const mins = Math.round((diff - hrs) * 60 / 1.0);

  return `${hrs} hrs ${mins} mins`;
};

const Movie = ({ movie }) => {
  const formattedDate = moment(movie.date).format('MMM D, YYYY');
  const formattedRunTime = formatRunTime(movie.run_time);

  return (
    <Media>
      <Media.Left>
        <img src={movie.image} alt={movie.title} width={195} height={292} />
      </Media.Left>
      <Media.Body>
        <Media.Heading>{movie.title}</Media.Heading>
        <p>Release Date: {formattedDate}</p>
        <p>Running Time: {formattedRunTime}</p>
      </Media.Body>
    </Media>
  );
};

Movie.propTypes = {
  movie: movieShape.isRequired
};

export default Movie;
