import React, { useState, useEffect } from 'react';
import './offers.css'
import p1 from './images/p1.avif'
import p2 from './images/p2.avif'
import p3 from './images/p3.avif'
const Offers = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex(slideIndex + 1);
      if (slideIndex >= slides.length) {
        setSlideIndex(1);
      }
      console.log(slideIndex);
      slides[slideIndex - 1].style.display = "block";
    };

    const slideInterval = setInterval(showSlides, 2000); // Change image every 2 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex]);

  const plusSlides = (n) => {
    if(slideIndex + n < 3)
    {
      setSlideIndex(prevIndex => prevIndex + n);
    }
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={p1} style={{ width: "100%" }} />
      </div>
      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src={p2} style={{ width: "100%" }} />
      </div>
      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src={p3} style={{ width: "100%" }} />
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      <br />
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Offers;
