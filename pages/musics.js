import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
const musics = () => {
  return (
    <div className='max-w-7xl min-h-[50vh] mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>
          Musicas Autorais por <span className='font-bold'>Carlos Thandra</span>
        </h1>
      </div>
      <div>
        <FaSpotify size={60} className='py-2' />
      </div>
      <div>
        <iframe
          src='https://open.spotify.com/embed/artist/7kcZ1XZWi4w90fhWfn2qzw?utm_source=generator'
          width='100%'
          height='380'
          frameBorder='0'
          allowFullScreen
          className='rounded-xl w-full mx-auto'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'>
          Player
        </iframe>
      </div>
      <div>
        <FaYoutube size={60} />
        <div>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/zwDpI0mn4kg'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default musics;
