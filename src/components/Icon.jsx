import '../styles/Icon.css';
import React from 'react';

function Icon({ name, pic, x, y, hovertext, onHover, onClick, clickable }) {
  return (
    <div
      className='Icon'
      style={{ top: y, left: x, cursor: clickable ? 'pointer' : 'default' }}
      onMouseEnter={() => onHover(hovertext)}
      onMouseLeave={() => onHover('')}
      onClick={() => {
        onClick();
        onHover('');
      }}
    >
      <img src={pic}></img>
      <div className='icon-label'>{name}</div>
    </div>
  );
}

export default Icon;
