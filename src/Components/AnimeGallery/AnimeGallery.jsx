import React, { useEffect, useState } from 'react';
import './AnimeGallery.css';

const AnimeGallery = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then((res) => res.json())
      .then((data) => setAnimes(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="anime-gallery">
      <h2>Anime Gallery</h2>
      <div className="gallery-grid">
        {animes.map((anime) => (
          <div key={anime.mal_id} className="gallery-item">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <p className="anime-title">{anime.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimeGallery;

