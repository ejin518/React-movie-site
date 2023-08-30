import React from 'react';
import {
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import { GenresList } from './GenresList';
import './Movies.css';

function Show ({list}) {
  const [genre, setGenre] = useState([]);
    const getGenre = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${list}`)).json();
        setGenre(json.data.movies);
    }
    useEffect(() => {
        getGenre();
    }, []);
  return (
    <>
      <div className='section'>
        <ul className='movie-wrap'>
          {genre.map(movie =>
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

const Movies = () => {
  const [click, setClick] = useState(null);
  const onClick = (event) => {
    setClick(event.target.className);
  }
  console.log(click);
  return (
    <>
      <div className='movie-wrap'>
        <ul className='genre-name'>
            {GenresList.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={onClick}>
                  {item.genre}
                </li>
              )
            })}
        </ul>
      </div>
      <div>
        {GenresList.map((item) => {
          return (
            click === (item.cName) ? <Show list={click} /> : null
          )
        })}
      </div>
    </>
  );
};
export default Movies