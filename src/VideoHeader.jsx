import React, { useState, useEffect } from 'react';
import './VideoHeader.css';

const Typewriter = ({ texts, typingSpeed = 150, deletingSpeed = 100, pause = 1000 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (!deleting && subIndex === texts[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(texts[index].substring(0, subIndex));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return <h1 className="typewriter-text">{text}|</h1>;
};

const VideoHeader = () => {
  return (
    
    <header className="video-header">
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/public/vheader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <Typewriter texts={['Welcome to myapp', 'We Create the best Experiences for anime lovers', 'Get everything anime in the best anime planet']} />
      </div>
      <div>
       <nav className="header-menu">
        <div className="logo">Animeworld</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Anime's</a></li>
          
        </ul>
      
      </nav>
        </div>
    </header>
  );
};

export default VideoHeader;
