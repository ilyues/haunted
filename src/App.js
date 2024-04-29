import './App.css';
import React from 'react';
import screen_texture from './assets/screen-texture.png';
import halftone from './assets/halftone.jpg';
import Login from './pages/Login';
import Desktop from './pages/Desktop';
import sticky_front from './assets/login/sticky-front.png';
import sticky_back from './assets/login/sticky-back.png';

function App() {
  const [start, setStart] = React.useState(false);
  const [showSticky, setShowSticky] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [flavour, setFlavour] = React.useState();
  return (
    <div className='App'>
      {showSticky ? (
        <div
          className='sticky-note'
          onMouseMove={() =>
            setFlavour(
              start
                ? 'David gave you this computer to use after you wipe all the data on it.'
                : 'A sticky note. Turn it over?'
            )
          }
          onMouseLeave={() => setFlavour('')}
          onClick={
            !start
              ? () => {
                  setStart(true);
                  setFlavour('');
                }
              : () => {
                  setShowSticky(false);
                  setFlavour('');
                }
          }
          style={{
            backgroundImage: start
              ? 'url(' + sticky_back + ')'
              : 'url(' + sticky_front + ')',
          }}
        >
          {start ? (
            <></>
          ) : (
            <div className='sticky-title'>
              <div className='game-title'>haunted machine</div>
              <div className='game-subtitle'>
                A speculation by
                <br></br>Isabel Yue Li.
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className='main-screen'>
        <img id='halftone-tex' src={halftone}></img>
        <img id='screen-tex' src={screen_texture}></img>
        {loggedIn ? (
          <Desktop onHover={setFlavour} onClick={setLoggedIn} />
        ) : (
          <Login
            onHover={setFlavour}
            onClick={setLoggedIn}
            freezeButtons={showSticky}
          />
        )}
      </div>
      <div className='flavour'>{flavour}</div>
    </div>
  );
}

export default App;
