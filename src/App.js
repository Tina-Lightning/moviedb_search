import React, { Component } from 'react';
import Nav from "./components/nav.js"
import SearchBar from "./components/search-bar.js"
import MovieList from "./components/movie-list.js"
import Pagination from "./components/pagination.js"
import MovieInfo from "./components/movie-info.js"


class App extends Component {
  
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null

    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
 
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  viewMovieInfo = (id) => {
    const filterMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null; 

    this.setState({ currentMovie: filteredMovie })

  }

  closeMovieInfo = () => {
      this.setState({ currentMovie: null })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        <Nav />

        {this.state.currentMovie === null ? <div><SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} />}

        {this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : "" }

      </div>
    );
  }
}

export default App;
