import '../styles/Icon.css';
import React from 'react';
import cursor from '../assets/cursor.png';

function Icon({
  styles,
  name,
  pic,
  x,
  y,
  hovertext,
  onHover,
  onClick,
  clickable,
  inFolder,
}) {
  return (
    <div
      className='Icon'
      style={{
        top: y,
        left: x,
        cursor: clickable ? 'pointer' : 'url(' + cursor + '), auto',
        zIndex: inFolder ? '3' : '1',
        color: inFolder ? 'black' : 'antiquewhite',
        fontSize: inFolder ? 'x-small' : 'small',
        ...styles,
      }}
      onMouseEnter={() => (clickable ? onHover(hovertext) : null)}
      onMouseLeave={() => onHover('')}
      onClick={
        clickable
          ? () => {
              onClick();
              onHover('');
            }
          : null
      }
    >
      <img src={pic}></img>
      <div className='icon-label'>{name}</div>
    </div>
  );
}

export default Icon;
