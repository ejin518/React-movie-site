import React from 'react';
import { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import './Rating.css';

function Result({rating}) {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}`)
    ).json();
    setMovies(json.data.movies);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div className='section'>
        <ul className='movie-wrap'>
          {movies.map(movie =>
            <li className='movie-info' key={movie.id}>
              <div className='movie-info-wrap'>
                <img src={movie.medium_cover_image} className='movie-img' alt={movie.title} />
                <div className='movie-title'>
                  <h3>{movie.title.length > 20 ? `${movie.title.slice(0, 25)}...` : movie.title}</h3>
                  <span>{movie.year}</span>
                </div>
                <button className='movie-btn'><Link to={`/movie/${movie.id}`}>See More</Link></button>
              </div>
            </li>
            )}
        </ul>  
      </div>
    </>
  )
}
const Rating = () => {
  const [click, setClick] = useState(null);
  const Ratings = ['6', '7', '8', '9', '10'];
  const onClickRating = (event) => {
      setClick(event.target.className);
  }
  console.log(click);
  return (
    <>
      <div className='rating-wrap'>
        <ul className='rating-list'>
            {Ratings.map((item, index) => {
              return (
                <li key={index} onClick={onClickRating} className={item}>Rating {item}.0</li>
              )
            })}
        </ul>
      </div>
      <div className='result-wrap'>
            {Ratings.map((item) => {
              return(
                click === (item) ? <Result rating={item} /> : null
              )
            })}
      </div>
    </>
  )
}

export default Rating