import '../styles/Icon.css';
import React from 'react';

function Icon({ name, pic, x, y, hovertext, onHover, onClick }) {
  return (
    <div
      className='Icon'
      style={{ top: x, left: y }}
      onMouseEnter={() => onHover(hovertext)}
      onMouseLeave={() => onHover('')}
      onClick={() => {
        onClick(true);
        onHover('');
      }}
    >
      <img src={pic}></img>
      {name}
    </div>
  );
}

export default Icon;
