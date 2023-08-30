import React from 'react';
import {
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import './Home.css';
import Slider from './section/Slider';
import BgSlider from './section/BgSlider';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json`)
    ).json();
    setMovies(json.data.movies);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className='wrapper'>
      <div className='section hero'>
        <BgSlider></BgSlider>
      </div>
      <div className='section'>
        <Slider movies={movies}></Slider>
      </div>
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
    </div>
  )
}

export default Home