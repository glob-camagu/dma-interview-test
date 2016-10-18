import React, { Component } from 'react';
import { Clearfix } from 'react-bootstrap';
import _ from 'lodash';
import SearchBar from './SearchBar';
import PaginationSummary from './PaginationSummary';
import SortControl from './SortControl';
import MovieList from './MovieList';
import Paginator from './Paginator';

const MOVIES_PER_PAGE = 5;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      sort: {
        field: 'date',
        direction: 'asc'
      },
      page: 1,
      movies: []
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSortFieldChange = this.handleSortFieldChange.bind(this);
    this.handleSortDirectionChange = this.handleSortDirectionChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
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

  handlePageChange(page) {
    this.setState({page});
  }

  handleSearchTermChange(searchTerm) {
    this.setState({searchTerm, page: 1});
  }

  handleSortFieldChange(field) {
    this.setState({sort: {...this.state.sort, field}, page: 1});
  }

  handleSortDirectionChange(direction) {
    this.setState({sort: {...this.state.sort, direction}, page: 1});
  }

  render() {
    const { searchTerm, sort, page } = this.state;

    const visibleMovies = this.getVisibleMovies();
    const firstItemIdx = (page - 1) * MOVIES_PER_PAGE;
    const lastItemIdx = Math.min(
      firstItemIdx + MOVIES_PER_PAGE,
      visibleMovies.length
    );

    const numPages = Math.ceil(visibleMovies.length / MOVIES_PER_PAGE);
    const movies = visibleMovies.slice(firstItemIdx, lastItemIdx);

    return (
      <div className="container">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={this.handleSearchTermChange} />
        <hr />
        <div className="pull-left">
          <PaginationSummary
            firstItem={firstItemIdx + 1}
            lastItem={lastItemIdx}
            total={visibleMovies.length} />
        </div>
        <div className="pull-right">
          <SortControl {...sort}
            onFieldChange={this.handleSortFieldChange}
            onDirectionChange={this.handleSortDirectionChange} />
        </div>
        <Clearfix />
        <hr />
        <MovieList movies={movies} />
        <hr />
        <Paginator
          currentPage={page}
          numPages={numPages}
          onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

export default App;
