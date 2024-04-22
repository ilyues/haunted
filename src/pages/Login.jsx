import '../styles/Login.css';
import React from 'react';

function Login({ onHover, onClick }) {
  return (
    <>
      <div className='Login'>
        {/* <img src={login_icon}></img> */}
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
      <button className='wipe-button'>Reset Computer</button>
    </>
  );
}

export default Login;
