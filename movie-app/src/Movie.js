import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} title={this.props.title} />
                </div>
                <div className="Movie__Columns">
                    <h2>{this.props.title}</h2>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, idx) => {
                            return <MovieGenre genre={genre} key={idx} />
                        })}
                    </div>
                    <p className="Movie__Synopsis">{this.props.synopsis}</p>
                </div>
            </div>
        );
    }
}

class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="Movie__Poster">
                <img src={this.props.poster} alt={this.props.title} title={this.props.title} />
            </div>
        );
    }
}

class MovieGenre extends Component {
    static propTypes = {
        genre: PropTypes.string.isRequired
    }

    render() {
        return (
            <span className="Movie__Genre">
                 {this.props.genre} 
            </span>
        );
    }
}

export default Movie