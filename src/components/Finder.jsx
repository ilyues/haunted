import '../styles/Finder.css';
import React from 'react';

function Finder({ name, onHover, setFocus, setOpenFolder }) {
  return (
    <div className='Finder'>
      <div className='finder-window'>
        <div
          className='close-finder-button'
          onClick={() => {
            setOpenFolder(null);
            onHover('');
            setFocus('desktop');
          }}
        ></div>
        <div className='finder-name-topbar'>{name}</div>
        <div className='finder-name-address'>{name}</div>
      </div>
    </div>
  );
}

export default Finder;
