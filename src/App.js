import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SortControl from './SortControl';
import MovieList from './MovieList';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      sort: {
        field: 'date',
        direction: 'asc'
      },
      movies: []
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSortFieldChange = this.handleSortFieldChange.bind(this);
    this.handleSortDirectionChange = this.handleSortDirectionChange.bind(this);
  }

  componentDidMount() {
    fetch('movies.json')
      .then(resp => resp.json())
      .then(resp => this.setState({movies: resp.items}));
  }

  getVisibleMovies() {
    const { movies, searchTerm, sort } = this.state;

    return _(movies)
      .filter(movie => (
        ~movie.title.toLowerCase().indexOf(searchTerm.toLowerCase())
      ))
      .orderBy([m => {
        let val = m[sort.field];
        if (val.toLowerCase !== undefined) val = val.toLowerCase();
        return val;
      }], sort.direction)
      .value();
  }

  handleSearchTermChange(searchTerm) {
    this.setState({searchTerm});
  }

  handleSortFieldChange(field) {
    this.setState({sort: {...this.state.sort, field}});
  }

  handleSortDirectionChange(direction) {
    this.setState({sort: {...this.state.sort, direction}});
  }

  render() {
    const movies = this.getVisibleMovies();
    const { searchTerm, sort } = this.state;

    return (
      <div className="container">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={this.handleSearchTermChange} />
        <hr />
        <SortControl {...sort}
          onFieldChange={this.handleSortFieldChange}
          onDirectionChange={this.handleSortDirectionChange} />
        <hr />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
