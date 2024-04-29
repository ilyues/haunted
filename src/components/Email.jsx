import '../styles/Email.css';
import React from 'react';
import EmailSelect from './EmailSelect';

function EmailWindow({ onHover, setFocus, setOpenFolder, setOpenFile }) {
  const [openTab, setOpenTab] = React.useState('inbox');
  const [emailSelected, setEmailSelected] = React.useState(0);
  const email_previews = [
    {
      from: 'info@shenzhenfunerals.com.cn',
      subj: 'Service for Vivia Qiong',
      received: '04 April, 2040',
      content: 'thank youuu siren <3',
    },
    {
      from: 'vqiong328@126.com',
      subj: 'PRINT — for tomorrow!',
      received: '',
      content: 'thank youuu siren <3',
    },
    {
      from: 'vqiong328@126.com',
      subj: '',
      received: '',
      content: (
        <>
          <p>Dear Siren,</p>

          <p>
            I met you last night at the Strawshop gallery opening &mdash; we
            talked but I ended up being pulled away without actually getting
            your contact. I remember you talking about your work and I found
            your email online
          </p>

          <p>Warmly, Vivia&#160;</p>
        </>
      ),
    },
    { from: 'vqiong328@126.com', subj: '', received: '' },
    { from: 'vqiong328@126.com', subj: '', received: '' },
    { from: 'vqiong328@126.com', subj: '', received: '' },
    { from: '', subj: '', received: '' },
  ];
  return (
    <div className='window' style={{ width: '650px' }}>
      <div className='title-bar'>
        <div className='title-bar-text'>Inbox</div>
        <div className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button
            aria-label='Close'
            onClick={() => {
              onHover('');
              setFocus('desktop');
              setOpenFolder(null);
            }}
          ></button>
        </div>
      </div>
      <div className='window-body'>
        <menu role='tablist'>
          <li
            role='tab'
            aria-selected={openTab === 'inbox'}
            onClick={() => setOpenTab('inbox')}
          >
            <a href='#tabs'>Inbox</a>
          </li>
          {/* <li
            role='tab'
            aria-selected={openTab === 'drafts'}
            onClick={() => setOpenTab('drafts')}
          >
            <a href='#tabs'>Drafts (2)</a>
          </li> */}
        </menu>
        <div className='window' role='tabpanel'>
          <div className='window-body inbox-body'>
            {/* <ul className='tree-view'>
              <div className='email-select-window'></div>
            </ul> */}
            <div
              className='sunken-panel'
              style={{ height: '400px', width: '250px' }}
            >
              <table className='interactive'>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Received</th>
                  </tr>
                </thead>
                <tbody>
                  {email_previews.map((e, id) => (
                    <EmailSelect
                      id={id}
                      emailSelected={emailSelected}
                      setEmailSelected={setEmailSelected}
                      from={e.from}
                      subj={e.subj}
                      received={e.received}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className='inbox-body-right'>
              <div
                style={{
                  height: '50px',
                  padding: '5px 10px 5px 10px',
                  width: '360px',
                  textAlign: 'left',
                }}
              >
                <b>From: </b>
                {email_previews[emailSelected].from}
                <br></br>
                <b>Date: </b>
                {email_previews[emailSelected].received}
                <br></br>
                <b>To: </b>
                Siren
                <br></br>
                <b>Subject: </b>
                {email_previews[emailSelected].subj}
              </div>
              <div
                className='sunken-panel inbox-body-text'
                style={{
                  height: '340px',
                  width: '360px',
                  position: 'relative',
                }}
              >
                {email_previews[emailSelected].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailWindow;
