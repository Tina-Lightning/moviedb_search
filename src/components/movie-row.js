import React, { Component } from "react";
import "./style.css";

class MovieRow extends React.Component {

    viewMovie() {
        console.log("trying to view movie")
        console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() {
        return <div className="row" key={this.props.movie.id}>
            <div className="col-md-3">
                <img className="img-fluid" alt="poster" src={this.props.movie.poster_src} />
            </div>
            <div className="col-md-9">
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.overview}</p>
                <button type="button" onClick={this.viewMovie.bind(this)} className="btn btn-primary">View</button>
                
             </div>
        </div>
    }
}

export default MovieRow;