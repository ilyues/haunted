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
          pic={'/'}
          x={520}
          y={170}
          hovertext={'An important document, perhaps.'}
          onHover={onHover}
        ></Icon>
        <Icon
          id='eulogy-vivia'
          name='vivia.JPEG'
          pic={'/'}
          x={520}
          y={270}
          hovertext={'To go with the document?'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='trash'
          name='Recycle Bin'
          pic={'/'}
          x={800}
          y={500}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='email'
          name='Inbox'
          pic={'/'}
          x={25}
          y={25}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='browser'
          name='Internet'
          pic={'/'}
          x={25}
          y={125}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='work'
          name='Work'
          pic={'/'}
          x={25}
          y={225}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='writing'
          name='Personal Writing'
          pic={'/'}
          x={25}
          y={325}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='minutes'
          name='Minutes'
          pic={'/'}
          x={25}
          y={425}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='notes'
          name='Notes'
          pic={'/'}
          x={125}
          y={25}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='photos'
          name='Photos'
          pic={'/'}
          x={125}
          y={125}
          hovertext={'...'}
          onHover={onHover}
        ></Icon>
      </div>

      <button className='logout-button'>Logout</button>
    </>
  );
}

export default Desktop;
