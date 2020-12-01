import React from 'react';
import { usePlayerContext } from '../PlayerContext.jsx';
import logo from '../assets/logo_player.svg';

const NavAppBarTop = () => {
  const { drawerOpen, setDrawerOpen } = usePlayerContext();
  return (
    <nav className={`app__header ${drawerOpen ? 'drawer__shrink_in' : ''}`}>
      <div className='app_logo_section'>
        <img src={logo} style={{ width: 70 }} alt='' />
        <h3>Freeily</h3>
      </div>
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className='app_library--btn'>
        Library
      </button>
    </nav>
  );
};

export default NavAppBarTop;
