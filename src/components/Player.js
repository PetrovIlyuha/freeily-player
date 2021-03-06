import React, { useCallback, useEffect } from 'react';
import { CgPlayTrackPrevO, CgPlayTrackNextO } from 'react-icons/cg';
import { GiPauseButton } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { usePlayerContext } from '../PlayerContext';

const Player = () => {
  const {
    isPlaying,
    playerRef,
    setIsPlaying,
    drawerOpen,
    tracks,
    currentTrack,
    setCurrentTrack,
    songProgress,
    setSongProgress,
  } = usePlayerContext();

  const iconStyles = {
    fontSize: 30,
    color: '#D2E8D4',
  };

  const playSongHandler = () => {
    if (isPlaying) {
      playerRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      playerRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    tracks.map(song =>
      song === currentTrack ? (song.active = true) : (song.active = false),
    );
  }, [currentTrack, tracks, playerRef, isPlaying]);

  const getTime = time => {
    return `${Math.floor(time / 60)}:${
      Math.floor(time % 60) < 10
        ? String(Math.floor(time % 60)).padStart(2, '0')
        : Math.floor(time % 60)
    }`;
  };

  const skipTrackHandler = useCallback(
    async direction => {
      const currentSongIndex = tracks.findIndex(song => song === currentTrack);
      if (direction === 'next') {
        await setCurrentTrack(tracks[(currentSongIndex + 1) % tracks.length]);
        if (isPlaying) playerRef.current.play();
      }
      if (direction === 'prev') {
        if (currentSongIndex > 0) {
          await setCurrentTrack(tracks[currentSongIndex - 1]);
          if (isPlaying) playerRef.current.play();
        } else {
          await setCurrentTrack(tracks[tracks.length - 1]);
        }
      }
    },
    [currentTrack, tracks, isPlaying, playerRef, setCurrentTrack],
  );

  useEffect(() => {
    if (songProgress.percentAnimated === 100) {
      skipTrackHandler('next');
    }
  }, [songProgress, skipTrackHandler]);

  const dragHandler = e => {
    playerRef.current.currentTime = e.target.value;
    setSongProgress({ ...songProgress, currentTime: e.target.value });
  };

  const animateTrackSlider = {
    transform: `translateX(${songProgress.percentAnimated}%)`,
  };
  const currentTrackStyle = {
    background: `linear-gradient(to right, ${currentTrack.color[0]}, ${currentTrack.color[1]}`,
  };

  return (
    <div className={`player ${drawerOpen ? 'drawer__shrink_in' : ''}`}>
      <div className='time-control'>
        <p>{getTime(songProgress.currentTime)}</p>
        <div className='track' style={currentTrackStyle}>
          <input
            type='range'
            min={0}
            max={songProgress.duration || 0}
            value={songProgress.currentTime}
            onChange={dragHandler}
          />
          <div className='animate-track' style={animateTrackSlider} />
        </div>
        <p>{songProgress.duration ? getTime(songProgress.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <CgPlayTrackPrevO
          style={iconStyles}
          onClick={() => skipTrackHandler('prev')}
          className='skip-back control-icon'
        />
        {isPlaying ? (
          <GiPauseButton
            onClick={playSongHandler}
            className='control-icon'
            style={iconStyles}
          />
        ) : (
          <BsFillPlayFill
            onClick={playSongHandler}
            className='play control-icon'
            style={iconStyles}
          />
        )}
        <CgPlayTrackNextO
          onClick={() => skipTrackHandler('next')}
          style={iconStyles}
          className='skip-forward control-icon'
        />
      </div>
    </div>
  );
};

export default Player;
