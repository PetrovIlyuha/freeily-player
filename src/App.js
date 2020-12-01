import React from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';

import Library from './components/Library';
import NavAppBarTop from './components/NavAppBarTop';
import { usePlayerContext } from './PlayerContext';

function App() {
  const { playerRef, currentTrack, timeUpdateHandler } = usePlayerContext();
  return (
    <div>
      <NavAppBarTop />
      <Song />
      <Player />
      <Library />
      <audio
    onTimeUpdate={timeUpdateHandler}
    onLoadedMetadata={timeUpdateHandler}
    ref={playerRef}
    src={currentTrack.audio}/>
    </div>
  );
}

export default App;
