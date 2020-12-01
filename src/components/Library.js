import React from 'react';
import { usePlayerContext } from '../PlayerContext';
import Track from './Track';

const Library = () => {
  const {
    tracks,
    setCurrentTrack,
    playerRef,
    isPlaying,
    setIsPlaying,
    drawerOpen,
  } = usePlayerContext();
  return (
    <div className={`library ${drawerOpen ? 'show' : ''}`}>
      <h2>Your Library</h2>
      <div className='library-songs'>
        {tracks.map(track => (
          <Track
            key={track.id}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            playerRef={playerRef}
            track={track}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
