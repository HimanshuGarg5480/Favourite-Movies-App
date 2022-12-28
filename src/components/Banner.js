import { movies } from './GetMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    let movie=movies.results[0];
    return (
      <>
      {
        movie == ''?<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>:
        
        <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
        <div className="card-body">
          <h5 className="card-title banner-title">{movie.title}</h5>
          <p className="card-text banner-text">{movie.overview}</p>
        </div>
      </div>
     
    }
    </>
    )
  }
}
