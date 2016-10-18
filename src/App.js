import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      movies: []
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  componentDidMount() {
    fetch('movies.json')
      .then(resp => resp.json())
      .then(resp => this.setState({movies: resp.items}));
  }

  getVisibleMovies() {
    const { movies, searchTerm } = this.state;

    return _(movies)
      .filter(movie => (
        ~movie.title.toLowerCase().indexOf(searchTerm.toLowerCase())
      ))
      .value();
  }

  handleSearchTermChange(searchTerm) {
    this.setState({searchTerm});
  }

  render() {
    const movies = this.getVisibleMovies();
    const { searchTerm } = this.state;

    return (
      <div className="container">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={this.handleSearchTermChange} />
        <hr />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
