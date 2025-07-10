import React from 'react';
import '../index.css';
import robotImg from '../assets/robot.png';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="section-title" data-aos="fade-up">About Me</h1>

      <div className="about-text">
        <h2 data-aos="fade-right">
          <span>Hello, I'm</span><br />Daniel Sinaga
        </h2>

        <p data-aos="fade-right" data-aos-delay="200">
          Saya adalah seorang pelajar yang minat  di UI/UX Designer dan bersemangat menciptakan website modern dan responsive. Saya suka belajar teknologi baru dan selalu ingin meningkatkan keterampilan dalam pengembangan web.
        </p>

        <blockquote data-aos="fade-up" data-aos-delay="400">
          “Leveraging AI as a professional tool, not a replacement.”
        </blockquote>

        <div className="about-buttons" data-aos="fade-up" data-aos-delay="450">
          <a href="CV.pdf" className="btn primary">📄 Download CV</a>
        </div>
      </div>

      <div className="about-img" data-aos="fade-up" data-aos-delay="800">
        <img src={robotImg} alt="Profile" />
      </div>
    </section>
  );
};

export default About;
