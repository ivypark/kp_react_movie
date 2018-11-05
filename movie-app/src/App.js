import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Loading from './Loading';

class App extends Component {

  state = {}

  componentDidMount() {
    this._changeState();
  }

  _setLoadingDOM = () => {
    return <Loading msg="HELLO! LOADING SOON!" />
  }

  _setMainDOM = () => {
    console.log(this.state.movies);
    return (this.state.movies).map(curr => {
      return <Movie
        title={curr.title}
        poster={curr.medium_cover_image}
        genres={curr.genres}
        synopsis={curr.synopsis}
        key={curr.id}
      />
    })
  }

  _changeState = async () => {
    const movies = await this._loadApi();
    this.setState({
      movies
    });
  }

  _loadApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(resp => resp.json())
    .then(json => json.data.movies)
    .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className={this.state.movies ? 'App' : 'App--loading'}>
        {this.state.movies ? this._setMainDOM() : this._setLoadingDOM()}
      </div>
    );
  }
}

export default App;
