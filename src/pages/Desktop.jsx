import '../styles/Desktop.css';
import React from 'react';
import Icon from '../components/Icon';

function Desktop({ onHover }) {
  return (
    <>
      <div className='Desktop'>
        {/* <img src={login_icon}></img> */}
        {/* <div className="login-username">Siren Lin</div>
      <div className="login-fields">
      <label className="login-label" for="pass">Password</label>
      <input id="pass" type="password" value='viviaq_xxx080528'></input>
      <button className="login-button" onMouseEnter={()=>onHover("A little look around won't hurt anyone.")} onMouseLeave={()=>onHover("")}>Login</button>
      </div> */}
        <Icon
          id='eulogy'
          name={'eulogy'}
          // pic={}
          x={10}
          y={300}
          hovertext={'hello'}
          onHover={onHover}
        ></Icon>
        <Icon id='eulogy-vivia'></Icon>

        <Icon id='trash'></Icon>

        <Icon id='email'></Icon>

        <Icon id='browser'></Icon>
      </div>
    </>
  );
}

export default Desktop;
