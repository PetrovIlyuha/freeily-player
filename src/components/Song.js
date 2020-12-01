import React from 'react';
import { usePlayerContext } from '../PlayerContext';

const Song = () => {
  const { currentTrack: track, isPlaying, drawerOpen, } = usePlayerContext();
  const {color} = track;
  return (
    <div className={`song-container ${drawerOpen ? 'drawer__shrink_in' : ''}`}
         style={{
           background: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
           color: `${color[2]}`
       }}
    >
      <img
        src={track.cover}
        className={isPlaying ? 'spinning__cover' : ''}
        alt={track.name}
      />
      <h1>{track.name}</h1>
      <h2>{track.artist}</h2>
    </div>
  );
};

export default Song;
