import React from 'react';
import VideoHeader from './VideoHeader';
import AnimeVideos from './components/AnimeVideos/AnimeVideos';
import AnimeGallery from './components/AnimeGallery/AnimeGallery';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
      <VideoHeader />
      <AnimeVideos />
      <AnimeGallery />
      <Footer />
   
    </>
  );
};

export default App;
