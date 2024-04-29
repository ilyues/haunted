import '../styles/Login.css';
import React from 'react';
import login_icon from '../assets/login/siren-user.png';
import '98.css';

function Login({ onHover, onClick, freezeButtons }) {
  const [resetButton, setResetButton] = React.useState(false);
  return (
    <>
      <div className='Login'>
        <img
          className='login-icon'
          src={login_icon}
          onMouseEnter={() =>
            onHover('Looks like the previous owner of this computer.')
          }
          onMouseLeave={() => onHover('')}
        ></img>
        <div className='login-username'>Siren Lin</div>
        <div className='login-fields'>
          <label className='login-label' for='pass'>
            Password
          </label>
          <input id='pass' type='password' value='viviaq_xxx080528'></input>
          <button
            className='login-button'
            onMouseEnter={() =>
              onHover("A little look around won't hurt anyone.")
            }
            onMouseLeave={() => onHover('')}
            onClick={() => {
              onClick(true);
              onHover('');
            }}
          >
            Login
          </button>
        </div>
        <button
          className='wipe-button'
          onClick={() => setResetButton(true)}
          style={{ cursor: freezeButtons ? 'not-allowed' : 'pointer' }}
          onMouseEnter={
            freezeButtons ? null : () => onHover('Seems easy enough.')
          }
          onMouseLeave={() => onHover('')}
        >
          Reset Computer
        </button>
        {resetButton && (
          <div className='window' style={{ width: '300px' }}>
            <div className='title-bar'>
              <div className='title-bar-text'>Reset Computer</div>
              <div className='title-bar-controls'>
                <button aria-label='Minimize'></button>
                <button aria-label='Maximize'></button>
                <button
                  aria-label='Close'
                  onClick={() => setResetButton(false)}
                ></button>
              </div>
            </div>
            <div className='window-body'>
              <p>Are you sure?</p>
              <button
                onMouseEnter={
                  freezeButtons
                    ? null
                    : () => onHover("Who are you kidding? Let's look around")
                }
                onMouseLeave={() => onHover('')}
                onClick={() => setResetButton(false)}
              >
                Not yet
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
