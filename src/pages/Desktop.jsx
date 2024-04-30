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
import text_file from '../assets/text_file.png';
import full_vivia_file from '../assets/full_vivia.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import EmailWindow from '../components/Email';

function Desktop({ onHover, onClick }) {
  const [focus, setFocus] = React.useState('desktop');
  const [openFolder, setOpenFolder] = React.useState(null);
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
                  setFocus('desktop');
                }}
              ></div>
            </div>
          )}

          {openFile === 'vivia1' && (
            <div
              className='window'
              style={{ width: '327px' }}
              onMouseEnter={() => onHover('A picture of a beautiful woman.')}
              onMouseLeave={() => onHover('')}
            >
              <div className='title-bar'>
                <div className='title-bar-text'>IMG_0012</div>
                <div className='title-bar-controls'>
                  <button aria-label='Minimize'></button>
                  <button aria-label='Maximize'></button>
                  <button
                    aria-label='Close'
                    onClick={() => {
                      onHover('');
                      setFocus('desktop');
                      setOpenFile(null);
                    }}
                  ></button>
                </div>
              </div>
              <div className='window-body' style={{ margin: '0px' }}>
                <img src={vivia_file}></img>{' '}
              </div>
            </div>
          )}

          {openFile === 'photo2' && (
            <div
              className='window window-folder-photo'
              style={{ width: '327px' }}
              onMouseEnter={() =>
                onHover(
                  'A photograph of an augmented person smashing through a police riot shield.'
                )
              }
              onMouseLeave={() => onHover('')}
            >
              <div className='title-bar'>
                <div className='title-bar-text'>Snapshot_0028</div>
                <div className='title-bar-controls'>
                  <button aria-label='Minimize'></button>
                  <button aria-label='Maximize'></button>
                  <button
                    aria-label='Close'
                    onClick={() => {
                      onHover('');
                      setFocus('folder');
                      setOpenFile(null);
                    }}
                  ></button>
                </div>
              </div>
              <div className='window-body' style={{ margin: '0px' }}>
                <img className='window-photo' src={photo2}></img>{' '}
              </div>
            </div>
          )}

          {openFile === 'full-vivia' && (
            <div
              className='img-file-folder'
              style={{ width: '336px', height: '459px' }}
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <img src={full_vivia_file}></img>{' '}
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
            </div>
          )}

          {openFile === 'photo1' && (
            <div
              className='img-file-folder'
              style={{ width: '336px', height: '459px' }}
              onMouseEnter={() =>
                onHover(
                  'A photograph of an injured hand. Does it belong to the cameraperson?'
                )
              }
              onMouseLeave={() => onHover('')}
            >
              <img src={photo1}></img>{' '}
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
            </div>
          )}

          {openFile === 'eulogy' && (
            <div
              className='text-file'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('desktop');
                }}
              ></div>
              <div className='text-file-content'>
                <b>Eulogy for Vivia Song</b>
                <p>
                  Vivia was a beloved visionary, sister, partner, and friend.
                  It&rsquo;s touching to be here with so many people whose lives
                  Vivia brightened with her own. Vivia was exceptional in her
                  kindness and creativity and honest love for others, and I'm
                  honoured to stand here as her partner in remembering her
                  vibrant life.
                </p>

                <p>
                  I first met Vivia at a gallery showing for Xia Hsu five years
                  ago, where she was performing some of her writing on opening
                  night. I spent the entire night in awe of her, her ability to
                  captivate a crowd and command attention, create laughter,
                  communicate love. This night was a testament to how she
                  navigated life: with a power to bring joy to others wherever
                  she went. In all the time I knew her, Vivia dedicated her
                  hours to producing art that could touch others and impact
                  their lives. I'm sure many of you have experienced the
                  privilege I'm describing to have known her.
                </p>

                <p>
                  Vivia was all honest joy and light and magic. She cared deeply
                  for others, sometimes at her own expense, and wanted so much
                  for her loved ones to thrive. As another writer, she was
                  always inspiring me, pushing and shaping my aspirations. I
                  adored her open-ness and willingness to welcome others into
                  her world; it is Vivia who introduced me to so many of you
                  standing here today. She was always gentle, generous, and
                  forgiving. It has been a pleasure to be loved by her.
                </p>

                <p>
                  Thank you all for gathering here to honour and celebrate
                  Vivia&rsquo;s life. Thank you for your presence here as we
                  remember her contributions to the arts communities in New
                  Guangzhou and beyond, and grieve our loss of such a beloved
                  writer, friend, and lover. May she live on through our
                  memories of her.
                </p>
              </div>
            </div>
          )}

          {openFile === 'eulogy-draft' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                <b>Eulogy for Vivia Song</b>
                <p>
                  Vivia was everything to me. It&rsquo;s surreal to be here with
                  you all, all of you who were touched by her and loved her or
                  loved by her in some way, knowing that she&rsquo;s no longer
                  with us. Vivia was the brightest, most brilliant person I had
                  ever met on this earth. It&rsquo;s hard to convince me that
                  there&rsquo;s anyone who could compare to her kindness and
                  talent and intensity. She was such a special person who
                  didn&rsquo;t deserve for her life to be so selfishly ended.
                </p>

                <p>
                  I first met Vivia at a gallery showing for Xia Hsu five years
                  ago, where she was performing some of her writing on opening
                  night. I spent the entire night in awe of her, her ability to
                  captivate a crowd and command attention, create laughter,
                  communicate love. We met for coffee two weeks later, and the
                  rest was history. We were inseparable; she was someone who I
                  needed to be close to all the time. We moved in together a
                  couple months after.
                </p>

                <p>
                  I knew Vivia better than I knew myself&mdash;she was all
                  honest joy and light and magic. She cared deeply for others,
                  sometimes at her own expense, and wanted so much for her loved
                  ones to choose what was best for themselves. As another
                  writer, she was always inspiring me, pushing and shaping my
                  aspirations. I adored her work, and felt privileged as her
                  partner to share in her words, to have a first preview to what
                  was on her mind through her manuscripts. In some ways it was
                  scary to be so vulnerable, or to see how vulnerable she was
                  willing to be with me. She was so open; it&rsquo;s her
                  open-ness and enthusiasm to integrate me into her life that
                  allows me to recognise so many of you here. She was always
                  gentle, generous, and forgiving. It has been a pleasure to be
                  loved by her.
                </p>

                <p>
                  Thank you all for gathering here to honour and celebrate
                  Vivia&rsquo;s life. Thank you for your presence here as we
                  remember her contributions to the arts communities in New
                  Guangzhou and beyond, and grieve our loss of such a beloved
                  writer, friend, and lover. May she live on through our
                  memories of her, and all her work.
                </p>
              </div>
            </div>
          )}

          {openFile === 'personal1' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                <p>
                  Being with her made me feel like a man—she was lyrical and
                  literary and lithe in her political existence, pretty but more
                  intelligent than pretty, and smooth and limber enough to slip
                  between the wrong things to say and stay feather light on the
                  right. I was lousy and hot-glued and makeshift in my
                  femininity. She made my edges feel filed to sinew, rough
                  flakes, thick spider webs soldered between day-old dew. The
                  wires made it worse, because then I was even further from her:
                  each one a tunnel dug away from her native grace, the soft
                  peaks our creator pinched to form her ankles. She was so good
                  and easy to love and I was nothing like her. My abdomen a
                  space, a dark matter adjacent to her, a shadow which didn’t
                  replicate her shape but inverted it. My heart was moulded to
                  contain all the harm that could be done to her.
                </p>
              </div>
            </div>
          )}

          {openFile === 'personal2' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                <p>Year End, a Dragon Eating its own Tail to form an Egg</p>

                <p>
                  {' '}
                  The train to Shanghai departs from a platform floating in the
                  sky. The escalator moves me towards air and its the first
                  gulps of fresh air I&rsquo;ve had this morning, even after
                  walking to the station with suitcase in tow (and so the
                  longest walk in human history), but it must be something about
                  how the sun takes full-jaw bites out of the platform that
                  renews everything to be so bright.
                </p>

                <p>
                  My laptop is fizzling down from 8% despite me leaving it out
                  to charge on the hotel room carpet, last thing to be packed,
                  and it boils on how I haven&rsquo;t been able to write all
                  week because of my reliance on technology (and failure to toss
                  a notebook into my backpack in all the fuzz and blur of almost
                  oversleeping the plane from Hong Kong, suitcase still face
                  open and half filled.) But I&rsquo;ve also been writing all
                  week, because thinking about writing is writing. Writing into
                  the clouds, writing into things that will change shape and
                  carry my thoughts away to places where noone speaks English,
                  or Cantonese, or Mandarin, or the other imaginary languages of
                  my brain.
                </p>

                <p>
                  I&rsquo;ve been writing a lot this past year, both like this
                  and in the more traditional sense, but meaning still feels
                  fluid and free and escaping my words through clumsy routes. I
                  have a romantic and intimate relationship with honesty.
                </p>
              </div>
            </div>
          )}

          {openFile === 'personal3' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                <p>Citizen of the Concave Gaze</p>

                <p>
                  Your China doll, but more than a political hemisphere away
                  from China, and a crescent sliver in negative space away from
                  girl. And finally, doll as in placeholder face for your
                  imaginations. Doll as in play, making light. Doll as in body,
                  body as in length of hair and skin and if I slouch with ankles
                  outward or the angle and grace of my wrist. Doll as in objet
                  d&rsquo;art, perhaps related to girl. Doll as in.
                </p>

                <p>
                  And my coming-around to the Beijing accent says I&rsquo;ll
                  arch my tongue and round my mouth to mirror you, maybe much
                  more barrel of a linguistic gun than tender kiss. But how can
                  you mistake a person from one mangled metropolis for another
                  when being born between the window reflections in the metal
                  city screams slippery silhouette, symphonic depths, screams
                  into Tian An Men's mythology for the first time to find no
                  echo, no substance, no skywires skewed into question marks
                  (future generations' curious eyes), no ocean which wanders
                  wide across the sky and lets the free wind make love in your
                  hair while you walk on over there. Only oppressive,
                  landlocked, lovelocked, million-dollar history drinking the
                  blue down its stone stairways, and sacrifice, and the
                  collective, and silence, and you overlay all these desires
                  onto my body. Transnational epidermis, stretched so thin by
                  your gaze you do not even see.
                </p>

                <p>
                  And still see too much when you look at me. You make up
                  radical ideas in the way that &#20182; and &#22905; find
                  themselves masculine, feminine in the visual print but are
                  identical in the spoken word, anointed canon by my
                  voice.&#160;
                </p>

                <p>Listen to me.&#160;</p>

                <p>
                  My cross to bear is a constellation that you can&rsquo;t see
                  from this half of the planet, this side of globalised irises
                  no matter how many times you roll them, the dark side of your
                  moon.
                </p>

                <p>The hemisphere, the negative space.</p>

                <p>Give me some room.</p>
              </div>
            </div>
          )}

          {openFile === 'minutes1' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                FEBRUARY 18 20XX
                <p>Announcements</p>
                <p>In attendance</p>
                <p>Guangzhou Opera House demonstration - March 7</p>
                <p>Press coverage</p>
              </div>
            </div>
          )}

          {openFile === 'note1' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                <p>november 13, 2039</p>

                <p>
                  so david told me i should keep a diary of sorts to track my
                  progress in yttp &mdash; if progress is the right way to talk
                  about it. he moreso meant it as in i should have a clear
                  record of what operations they do each session and how i feel,
                  or any side effects, i guess. just in case something goes
                  wrong, and also so i can report back accurately and his team
                  can safely operate on me. he said i should write this as soon
                  as i&rsquo;m safely out of each session so i can remember all
                  the details. not sure if he was fearmongering or not, but he
                  said other mayflower members had complications with his
                  modifications because they didn&rsquo;t accurately report on
                  their session outcomes. all the surgery talk honestly makes me
                  a little squeamish &mdash; i don&rsquo;t know if i really
                  trust mayflower more than the ccp to be operating on me. but i
                  don&rsquo;t want to risk it, so i&rsquo;m recording this on my
                  phone on the drive home and pasting the transcription into my
                  pc later. the pc&rsquo;s the other thing that freaks me out
                  too. maybe i should just shut up and do what they say, but i
                  didn&rsquo;t realise they&rsquo;d start making me use a new
                  drive for everything. but everyone in mayflower has one. a
                  second computer, i mean, that&rsquo;s supposedly more secure.
                </p>

                <p>
                  anyway, where was i. they did all the setup for me today, the
                  stuff that&rsquo;s pretty public. i remember watching all
                  those videos of them installing the chip when the program was
                  first announced and they had all those? promotional videos i
                  guess to show the public that it was a completely safe
                  surgery, and that&rsquo;s what&rsquo;s in the back of my neck
                  now, which is weird to think about. even though more and more
                  people i know are opting in now, and obviously the other
                  agents at mayflower also went through this process, i just
                  didn&rsquo;t expect it to feel so invasive. i signed the
                  papers and everything months ago and remember complaining to
                  vivia about the waitlist as a joke, not that she thought it
                  was particularly funny. but the second i was on the operating
                  table i was just suddenly so unsure of myself.
                </p>

                <p>it</p>

                <p>
                  i feel a little light-headed and drowsy probably still from
                  all the anti
                </p>

                <p>
                  i was probably knocked out for six hours straight, although
                  they were pretty upfront about it, so i already took the day
                  off in advance. they told me i shouldn&rsquo;t drive after all
                  the operations, but the new city hospital is so goddamn far
                  from tianhe, and i am not paying for a taxi today.
                </p>
              </div>
            </div>
          )}

          {openFile === 'minutes2' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                FEBRUARY 18 20XX
                <p>Announcements</p>
                <p>In attendance</p>
                <p>Guangzhou Opera House demonstration - March 7</p>
                <p>Press coverage</p>
              </div>
            </div>
          )}

          {openFile === 'minutes3' && (
            <div
              className='text-file-folder'
              onMouseEnter={() => onHover('')}
              onMouseLeave={() => onHover('')}
            >
              <div
                className='close-finder-button'
                onClick={() => {
                  setOpenFile(null);
                  onHover('');
                  setFocus('folder');
                }}
              ></div>
              <div className='text-file-content'>
                FEBRUARY 18 20XX
                <p>Announcements</p>
                <p>In attendance</p>
                <p>Guangzhou Opera House demonstration - March 7</p>
                <p>Press coverage</p>
              </div>
            </div>
          )}
        </div>
        {openFolder === 'email' && (
          <EmailWindow
            onHover={onHover}
            setFocus={setFocus}
            setOpenFolder={setOpenFolder}
          />
        )}
        {openFolder === 'documents' && (
          <>
            <Finder
              name='Documents'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='note4'
              name='autopsy'
              pic={notes_icon}
              x={250}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note4');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note4'
              name='CONSENT_signed'
              pic={notes_icon}
              x={350}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note4');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note4'
              name='siren passport scan'
              pic={notes_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note4');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'notes' && (
          <>
            <Finder
              name='Notes'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />

            <Icon
              id='note1'
              name='13_11_2039'
              pic={notes_icon}
              x={250}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note1');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note2'
              name='28_11_2039'
              pic={notes_icon}
              x={350}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note2');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note3'
              name='12_12_2039'
              pic={notes_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note3');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note4'
              name='14_01_2040'
              pic={notes_icon}
              x={550}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note4');
                setFocus('file');
              }}
            ></Icon>

            <Icon
              id='note6'
              name='06_03_2040'
              pic={notes_icon}
              x={250}
              y={350}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note6');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'pictures' && (
          <>
            <Finder
              name='Pictures'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='photo-1'
              name='Snapshot_0027'
              pic={vivia_thumb}
              x={250}
              y={260}
              hovertext={''}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('photo1');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='photo-2'
              name='Snapshot_0028'
              pic={vivia_thumb}
              x={350}
              y={260}
              hovertext={''}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('photo2');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='photo-3'
              name='Snapshot_0029'
              pic={vivia_thumb}
              x={450}
              y={260}
              hovertext={''}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('photo3');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='photo-4'
              name='Snapshot_0030'
              pic={vivia_thumb}
              x={550}
              y={260}
              hovertext={''}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('photo4');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'work' && (
          <>
            <Finder
              name='Work'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='work1'
              name='Nov2038_YTTPdraft1'
              pic={file_icon}
              x={250}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('work1');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='work2'
              name='18_02_20XX'
              pic={file_icon}
              x={350}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('work2');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='work3'
              name='18_02_20XX'
              pic={file_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('work3');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'writing' && (
          <>
            <Finder
              name='Personal Writing'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='personal1'
              name='womanhood_and_her'
              pic={file_icon}
              x={250}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('personal1');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='personal2'
              name='year_end_2038'
              pic={file_icon}
              x={350}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('personal2');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='personal3'
              name='citizen'
              pic={file_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('personal3');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'minutes' && (
          <>
            <Finder
              name='Minutes'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='minutes1'
              name='18_02_20XX'
              pic={file_icon}
              x={250}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('minutes1');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='minutes2'
              name='18_02_20XX'
              pic={file_icon}
              x={350}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('minutes2');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='minutes3'
              name='18_02_20XX'
              pic={file_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('minutes3');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}

        {openFolder === 'trash' && (
          <>
            <Finder
              name='Recycle Bin'
              onHover={onHover}
              setFocus={setFocus}
              setOpenFolder={setOpenFolder}
            />
            <Icon
              id='full-vivia'
              name='IMG_0032'
              pic={vivia_thumb}
              x={250}
              y={260}
              hovertext={'This thumbnail looks kinda familiar.'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('full-vivia');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='eulogy-draft'
              name='eulogy_v1'
              pic={file_icon}
              x={350}
              y={260}
              hovertext={'The first draft?'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('eulogy-draft');
                setFocus('file');
              }}
            ></Icon>
            <Icon
              id='note3'
              name='18_02_20XX'
              pic={notes_icon}
              x={450}
              y={260}
              hovertext={'...'}
              clickable={focus === 'folder'}
              onHover={onHover}
              inFolder={true}
              onClick={() => {
                setOpenFile('note3');
                setFocus('file');
              }}
            ></Icon>
          </>
        )}
        <Icon
          id='eulogy'
          name={'eulogy'}
          pic={file_icon}
          x={520}
          y={170}
          hovertext={'An important document, perhaps.'}
          clickable={focus === 'desktop'}
          onHover={onHover}
          onClick={() => {
            setOpenFile('eulogy');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFile('vivia');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFile('vivia1');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFile('vivia2');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFile('vivia3');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFile('vivia4');
            setFocus('file');
          }}
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
          onClick={() => {
            setOpenFolder('trash');
            setFocus('folder');
          }}
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
          onClick={() => {
            setOpenFolder('email');
            setFocus('folder');
          }}
        ></Icon>

        <Icon
          id='browser'
          name='Internet'
          pic={internet_icon}
          x={25}
          y={125}
          hovertext={
            'A nondescript, deprecated internet browser. Probably one of the vigilante browsers developed to get around the mainstream ones stuffed with tracking and government spyware, but it looks like they got to this one too.'
          }
          clickable={true}
          styles={{ cursor: 'not-allowed' }}
          onHover={onHover}
          onClick={() => null}
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
          onClick={() => {
            setOpenFolder('work');
            setFocus('folder');
          }}
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
          onClick={() => {
            setOpenFolder('writing');
            setFocus('folder');
          }}
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
          onClick={() => {
            setOpenFolder('minutes');
            setFocus('folder');
          }}
        ></Icon>

        <Icon
          id='notes'
          name='Notes'
          pic={folder_icon}
          x={125}
          y={25}
          hovertext={'Notes on what?'}
          clickable={focus === 'desktop'}
          onHover={onHover}
          onClick={() => {
            setOpenFolder('notes');
            setFocus('folder');
          }}
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
          onClick={() => {
            setOpenFolder('pictures');
            setFocus('folder');
          }}
        ></Icon>

        <Icon
          id='documents'
          name='Documents'
          pic={documents_icon}
          x={125}
          y={225}
          hovertext={'...'}
          clickable={focus === 'desktop'}
          onClick={() => {
            setOpenFolder('documents');
            setFocus('folder');
          }}
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
