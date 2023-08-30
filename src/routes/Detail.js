import React from 'react';
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './Detail.css';

const Detail = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const { chill } = useParams();
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${chill}`)).json();
        setMovieInfo(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    })
  return (
    <>
      <div className='wrapper'>
          <div className='movie-detail-wrap'>
              <div className='movie-detail-inner'>
                  <div className='movie-detail-img'>
                    <img src={movieInfo.medium_cover_image} alt={movieInfo.title}/>
                  </div>
                  <div className='movie-detail-info'>
                    <ul>
                      <li><h3>{movieInfo.title}({movieInfo.year})</h3></li>
                      <li>Rating: {movieInfo.rating}</li>
                      <li>Runtime: {movieInfo.runtime}</li>
                      <li>Genre: {movieInfo.genres && movieInfo.genres.length > 1 ? movieInfo.genres.map((g) => <span>• {g}  </span>) : (movieInfo.genres ? movieInfo.genres.map((g) => <span>{g}</span>) : null)}</li>
                      <li><p>{movieInfo.description_intro}</p></li>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Detail