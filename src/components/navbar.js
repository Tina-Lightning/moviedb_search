import React, { Component } from "react";
import "./style.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-film movie-icon"> </i>
                    MoviesDB Search
  </a>
            </nav>
        );
    }
}