import './App.css';
import React from 'react';
import screen_texture from './assets/screen-texture.png';
import halftone from './assets/halftone.jpg';
import Login from './pages/Login';
import Desktop from './pages/Desktop';
import cursor from './assets/cursor.svg';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [flavour, setFlavour] = React.useState();
  return (
    <div className='App'>
      <div
        className='main-screen'
        // style={{ cursor: 'url(' + cursor + '), auto' }}
      >
        <img id='halftone-tex' src={halftone}></img>
        <img id='screen-tex' src={screen_texture}></img>
        {loggedIn ? (
          <Desktop onHover={setFlavour} />
        ) : (
          <Login onHover={setFlavour} onClick={setLoggedIn} />
        )}
      </div>
      <div className='flavour'>{flavour}</div>
    </div>
  );
}

export default App;
