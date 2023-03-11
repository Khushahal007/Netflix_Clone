import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import home1 from "../assets/home1.jpg";
import homeTitle from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa"
import { AiOutlineInfoCircle } from "react-icons/ai"
import "../CSS/index.css"
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { getGenres } from '../store';
import { fetchMovies } from '../store';

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);


  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={home1} alt="home" className="homeJpg" />

      </div>
      <div className="container">
        <div >
          <img src={homeTitle} alt="mlogo" className="mlogo" />
        </div>
        <div className="buttonPlay">
          <button className="btn-play" onClick={() => navigate('/player')}> <FaPlay /> Play</button>
          <button className="btn-circle"><AiOutlineInfoCircle /> More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Netflix 