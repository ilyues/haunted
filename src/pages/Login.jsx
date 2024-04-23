import '../styles/Login.css';
import React from 'react';
import login_icon from '../assets/login/siren-user.png';

function Login({ onHover, onClick, freezeButtons }) {
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
      </div>
      <button
        className='wipe-button'
        style={{ cursor: freezeButtons ? 'not-allowed' : 'pointer' }}
        onMouseEnter={
          freezeButtons ? null : () => onHover('Seems easy enough.')
        }
        onMouseLeave={() => onHover('')}
      >
        Reset Computer
      </button>
    </>
  );
}

export default Login;
