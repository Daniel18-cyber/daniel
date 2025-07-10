import React, { useEffect, useRef } from 'react';
import '../index.css';
import robotImg from '../assets/robot.png';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['React Enthusiast', 'Web Designer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Frontend<br />Developer</h1>
        <h3 className="typing">
          <span ref={typedRef}></span>
        </h3>
        <p className="description">
          Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly untuk Solusi Digital.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={robotImg} alt="Cute Robot" />
      </div>
    </section>
  );
};

export default Hero;
