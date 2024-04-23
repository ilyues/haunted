import '../styles/Desktop.css';
import React from 'react';
import Icon from '../components/Icon';
import Finder from '../components/Finder';
import folder_icon from '../assets/icons/folder.png';
import documents_icon from '../assets/icons/documents.png';
import bin_icon from '../assets/icons/bin.png';
import internet_icon from '../assets/icons/internet.png';
import pictures_icon from '../assets/icons/pictures.png';
import file_icon from '../assets/icons/file.png';
import notes_icon from '../assets/icons/notes.png';
import inbox_icon from '../assets/icons/inbox.png';
import vivia_thumb from '../assets/icons/vivia.png';
import vivia_file from '../assets/vivia_file.png';

function Desktop({ onHover, onClick }) {
  const [focus, setFocus] = React.useState('desktop');
  const [showFinder, setShowFinder] = React.useState(true);
  const [openFile, setOpenFile] = React.useState(null);

  return (
    <>
      <div className='Desktop'>
        <div className='top-window'>
          {openFile === 'vivia' && (
            <div
              onMouseEnter={() => onHover('A picture of a beautiful woman.')}
              onMouseLeave={() => onHover('')}
            >
              <img src={vivia_file}></img>{' '}
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                }}
              ></div>
            </div>
          )}
        </div>
        {/* {showFinder ? <Finder setFocus={setFocus}></Finder> : <></>} */}
        <Icon
          id='eulogy'
          name={'eulogy'}
          pic={file_icon}
          x={520}
          y={170}
          hovertext={'An important document, perhaps.'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>
        <Icon
          id='eulogy-vivia'
          name='vivia'
          pic={vivia_thumb}
          x={520}
          y={270}
          hovertext={'To go with the document?'}
          clickable={focus === 'desktop'}
          onHover={onHover}
          onClick={() => setOpenFile('vivia')}
        ></Icon>

        <Icon
          id='vivia1'
          name='vivia1'
          pic={'/'}
          x={800}
          y={25}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='vivia2'
          name='vivia2'
          pic={'/'}
          x={800}
          y={125}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='vivia3'
          name='vivia3'
          pic={'/'}
          x={800}
          y={225}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='vivia4'
          name='vivia4'
          pic={'/'}
          x={800}
          y={325}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='trash'
          name='Recycle Bin'
          pic={bin_icon}
          x={800}
          y={500}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='email'
          name='Inbox'
          pic={inbox_icon}
          x={25}
          y={25}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='browser'
          name='Internet'
          pic={internet_icon}
          x={25}
          y={125}
          hovertext={'A nondescript internet browser.'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='work'
          name='Work'
          pic={folder_icon}
          x={25}
          y={225}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='writing'
          name='Personal Writing'
          pic={folder_icon}
          x={25}
          y={325}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='minutes'
          name='Minutes'
          pic={folder_icon}
          x={25}
          y={425}
          hovertext={'For a recurring meeting?'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='notes'
          name='Notes'
          pic={folder_icon}
          x={125}
          y={25}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='pictures'
          name='Pictures'
          pic={pictures_icon}
          x={125}
          y={125}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>

        <Icon
          id='documents'
          name='Documents'
          pic={documents_icon}
          x={125}
          y={225}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onHover={onHover}
        ></Icon>
      </div>

      <button
        className='logout-button'
        onMouseEnter={() => onHover('Had enough?')}
        onMouseLeave={() => onHover('')}
        onClick={() => {
          onClick(false);
          onHover('');
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Desktop;
