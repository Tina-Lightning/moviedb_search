import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import MovieRow from "./movie-row.js"
import $ from "jquery"

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        //console.log("this is my initalizer");

        // const movies = [
        //     { id: 0, poster_src: "https://image.tmdb.org/t/p/w1280/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg", title: "movie title 1", overview: "movie summary  1" },
        //     { id: 1, poster_src: "https://image.tmdb.org/t/p/w1280/qcr9bBY6MVeLzriKCmJOv1562uY.jpg", title: "movie title 2", overview: "movie summary  2" },
        // ]

        // let movieRows = [];

        // movies.forEach((movie) => {
        //     console.log(movie.title)
        //     const movieRow = <MovieRow movie={movie} />
        //     movieRows.push(movieRow)
        // });

        // this.state = { rows: movieRows }

        this.performSearch("woman");

        
    }

    performSearch(searchTerm) {
        console.log("perform search using movieDB")

        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=ab0daf48e5c9f6b2513a909b48005ede&query=" + searchTerm;

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("fetched data successfully");
                //console.log(searchResults);
                const results = searchResults.results;
                //console.log(results[0])

                let movieRows = [];

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w1280" + movie.poster_path;
                    //console.log(movie.poster_path);
                    const movieRow = <MovieRow key={movie.id} movie={movie} />
                    movieRows.push(movieRow)
                });

                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {
                console.error("fetched data UNsuccessfully");
            }
        })
    };

    searchChangeHandler(event) {
        console.log(event.target.value);
        const searchTerm = event.target.value;
        this.performSearch(searchTerm);
    }

    render() {
        return (
            <div>
                <input className="search-bar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />

              {this.state.rows}
            </div>
        );
    }

}