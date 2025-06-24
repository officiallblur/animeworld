import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyB1D3iilUgEllCMf7-eRyd-TOnB298zp2s'; 
const CHANNEL_ID = 'UCzSeZt6oYcNRuGk1FXH7jNw'; 
const MAX_RESULTS = 6;


const fallbackVideos = [
  '48wqK6ix2UU',
  '3CpFiXEDa5M',
  '5W7QXqS4AB4',
  'Y4T0sGnujlg',
  'nAe82r8C9_4',
  'BgARtcQvLPc'
];

const AnimeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.items?.filter(
          (item) => item.id.kind === 'youtube#video' && item.id.videoId
        );
        if (filtered && filtered.length > 0) {
          setVideos(filtered.map((v) => v.id.videoId));
        } else {
          setVideos(fallbackVideos);
        }
      })
      .catch((err) => {
        console.error('YouTube API error:', err);
        setVideos(fallbackVideos);
      });
  }, []);

  return (
    <section style={{ padding: '40px', backgroundColor: '#111', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Latest Anime Videos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {videos.map((videoId, index) => (
          <iframe
            key={index}
            width="360"
            height="215"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`Anime Video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </section>
  );
};

export default AnimeVideos;
