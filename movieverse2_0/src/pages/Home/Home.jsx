import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const navigate = useNavigate();

  // Example: hardcoded movieId for the hero "Play" button
  // Replace 550 with the actual TMDB movie ID for your hero banner movie
  const heroMovieId = 550;

  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Some stories are hidden where time stands still. In a quiet town nestled 
            between misty mountains, a young woman named Elara discovers an old, dusty journal hidden in her late grandmother's attic. As she begins to read its pages, she is mysteriously transported to a surreal world 
            where memories come alive.
          </p>
          <div className='hero-buttons'>
            <button
              className='btn'
              onClick={() => navigate(`/player/${heroMovieId}`)}
            >
              Play
            </button>
            <button className='dark-btn'>More Info</button>
          </div>
          {/* <TitleCards/> */}
        </div>
      </div>

      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"popular"} />
        <TitleCards title={"Top Rated Movies"} category={"top_rated"} />
        <TitleCards title={"Upcoming Movies"} category={"upcoming"} />
        <TitleCards title={"Top Picks For You"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;