import React from 'react';
import {
    Link
  } from "react-router-dom";
import { useState, useEffect} from "react";
import './Home.css';

const Romance = () => {
    const [romance, setRomance] = useState([]);
    const getRomance = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=romance`)).json();
        setRomance(json.data.movies);
    }
    useEffect(() => {
        getRomance();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {romance.map(movie =>
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
const Horror = () => {
    const [horror, setHorror] = useState([]);
    const getHorror = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=horror`)).json();
        setHorror(json.data.movies);
    }
    useEffect(() => {
        getHorror();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {horror.map(movie =>
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
const History = () => {
    const [history, setHistory] = useState([]);
    const getHistory = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=history`)).json();
        setHistory(json.data.movies);
    }
    useEffect(() => {
        getHistory();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {history.map(movie =>
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
const Drama = () => {
    const [drama, setDrama] = useState([]);
    const getDrama = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=drama`)).json();
        setDrama(json.data.movies);
    }
    useEffect(() => {
        getDrama();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {drama.map(movie =>
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
const Comedy = () => {
    const [comedy, setComedy] = useState([]);
    const getComedy = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=comedy`)).json();
        setComedy(json.data.movies);
    }
    useEffect(() => {
        getComedy();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {comedy.map(movie =>
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
const Animation = () => {
    const [animation, setAnimation] = useState([]);
    const getAnimation = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=animation`)).json();
        setAnimation(json.data.movies);
    }
    useEffect(() => {
        getAnimation();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {animation.map(movie =>
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
const Adventure = () => {
    const [adventure, setAdventure] = useState([]);
    const getAdventure = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=adventure`)).json();
        setAdventure(json.data.movies);
    }
    useEffect(() => {
        getAdventure();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {adventure.map(movie =>
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
const Action = () => {
    const [action, setAction] = useState([]);
    const getAction = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/list_movies.json?genre=action`)).json();
        setAction(json.data.movies);
    }
    useEffect(() => {
        getAction();
    }, []);
  return (
    <>
        <div className='section'>
        <ul className='movie-wrap'>
          {action.map(movie =>
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

const Genres = () => {
    const [index, setIndex] = useState("0");
    const onSelect = (event) => {
        setIndex(event.target.value);
    }
  return (
    <>
        <div className='section'>
        <select value={index} onChange={onSelect}>
            <option value="0">Action</option>
            <option value="1">Adventure</option>
            <option value="2">Animation</option>
            <option value="3">Comedy</option>
            <option value="4">Drama</option>
            <option value="5">History</option>
            <option value="6">Horror</option>
            <option value="7">Romance</option>
        </select>
        {index === "0" ? <Action /> : null}
        {index === "1" ? <Adventure /> : null}
        {index === "2" ? <Animation /> : null}
        {index === "3" ? <Comedy /> : null}
        {index === "4" ? <Drama /> : null}
        {index === "5" ? <History /> : null}
        {index === "6" ? <Horror /> : null}
        {index === "7" ? <Romance /> : null}
      </div>
    </>
  )
}

export default Genres