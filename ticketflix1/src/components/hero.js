import React, { useEffect } from 'react';
import Parallax from 'parallax-js'; // Assuming you have installed the Parallax.js library as a dependency
import './hero.css';
import background from './images/background.png';
import rock from "./images/rock.png";
import earth from "./images/earth.png";
import mid from "./images/mid.png";
import foreground from "./images/foreground.png";
const ParallaxComponent = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    new Parallax(scene);
  }, []);

  return (
    <div className='hero_body'>
      <section id="sectionone" className="screen">
        <div id="scene">
          <div data-depth="0.1" className="bg">
            <img src={background} alt="" />
          </div>
          <div data-depth="0.2" className="rock1">
            <img src={rock} alt="" />
          </div>
          <div data-depth="1.2" className="earth">
            <img src={earth} alt="" />
          </div>
          <div data-depth="0.1" className="text">
            <h1>EXPLORE WORLD OF MOVIES</h1>
          </div>
          <div data-depth="0.4" className="mid">
            <img src={mid} alt="" />
          </div>
          <div data-depth="0.1" className="fore">
            <img src={foreground} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxComponent;