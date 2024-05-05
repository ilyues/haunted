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

          {openFile === 'work1' && (
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
                <p>Nov 01, 2038</p>

                <p>
                  National Development and Reform Commission&rsquo;s Youth
                  Transition towards Technology Programme Begins in New
                  Guangzhou City
                </p>

                <p>
                  As of November 1st, 2038, the National Development and Reform
                  Commission&rsquo;s Youth Transition towards Technology
                  Programme begins operations in New Guangzhou City. Two major
                  clinics and programme sites will operate out of New Guangzhou
                  City Hospital and Liwan Women&rsquo;s Hospital. As of October
                  2038, 153 million citizens under the age of 32 have registered
                  to be part of the programme&rsquo;s initial rollout, 4.6
                  million of who live in New Guangzhou City. The programme has
                  already begun operations in Old Beijing City, Shanghai, and
                  Qin&rsquo;xing to great success.
                </p>

                <p>
                  The Youth Transition towards Technology Programme (YTTP) is
                  the National Development and Reform Commission&rsquo;s most
                  recent initiative to invigorate the Chinese economy and
                  encourage young adults back into the essential workforce.
                  Members of the programme gain access to exclusive and powerful
                  technology enhancing basic skills required for the modern
                  labour force. This includes improved senses, strength,
                  endurance, healing, logical reasoning, language skills, and
                  recall. These enhancements are introduced via a schedule of
                  government-certified and approved surgeries which are safe for
                  all citizens under 32 with no major health conditions. YTTP
                  members are then placed into essential and stable guaranteed
                  government jobs after the initial six-month surgery schedule
                  is completed and the enhancements have stabilised.
                </p>

                <p>
                  Announced in 2037, the programme has been endorsed by multiple
                  government officials, including Sun Wuyun of the State
                  Council. Lin Wenqi, the director of YTTP, claimed in the 2038
                  NDRC annual press conference that the YTTP will effectively
                  address the gap in labour created by the nation&rsquo;s ageing
                  population.
                </p>

                <p>
                  To learn more about the programme and register interest,
                  please be directed to the National Development and Reform
                  Commission&rsquo;s official website [hyperlink].
                </p>
              </div>
            </div>
          )}

          {openFile === 'work2' && (
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
                <p>February 10, 2040</p>

                <p>
                  Mass Demonstrations in New Guangzhou City Square Disrupt New
                  Year&rsquo;s Travel
                </p>

                <p>
                  A series of coordinated protests have shut down major train
                  stations in New Guangzhou City on the morning of February 10,
                  2040, wreaking havoc during the busiest travel season of the
                  year.
                </p>

                <p>
                  Protestors voiced opposition to the Youth Transition towards
                  Technology Programme (YTTP) which marked two full years of
                  operation last July. Recent public review of the National
                  Development and Reform Commission&rsquo;s policies for 2040
                  show that all funding originally intended for civic arts and
                  culture initiatives is being divested into YTTP. This explicit
                  announcement, in addition to the mass shutting down of private
                  galleries, theatres, and creative institutions nationwide over
                  the course of the past two years, has suggested at an ulterior
                  motive.
                </p>

                <p>
                  &ldquo;It&rsquo;s all just confirmation that the arts sectors
                  and communities are actively being destroyed by the
                  state,&rdquo; one anonymous protestor shared. &ldquo;YTTP is
                  another method for them to dictate where people choose to
                  work, along with all the other insidious forms of control the
                  surgeries claim on your body.&rdquo;
                </p>

                <p>
                  Power outages have been observed at Guangzhou South Railway
                  Station, Guangzhou Railway Station,&#160;Guangzhou East
                  Railway Station, Guangzhou North Railway Station, and
                  Guangzhou West Railway Station, beginning around 8:00AM.
                </p>

                <p>
                  Despite reports by government news sources that the
                  demonstrations have resulted in hundreds of casualties, the
                  Herald&rsquo;s ground reporters cannot verify these
                  statistics.
                </p>

                <p>
                  Responsibility for these demonstrations has been claimed by
                  resistance organisations Mayflower and Re/New Guangzhou, both
                  of which allegedly have stealth agents within YTTP to provide
                  information on YTTP technology and enhancement software.
                </p>

                <p>
                  New Guangzhou citizens are advised to take private
                  transportation or find alternative public transit options
                  (buses, trams) at this time while the train stations are out
                  of operation.{' '}
                </p>
              </div>
            </div>
          )}

          {openFile === 'work3' && (
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
                <p>March [], 2040</p>

                <p>
                  Tensions Reach Apex Between National Development and Reform
                  Commission and Resistance Groups
                </p>

                <p>
                  Despite the dubious tactics of Mayflower and other branching
                  resistance collectives in expressing their opposition to the
                  programme, YTTP has attracted negative attention and is poorly
                  regarded in the Chinese public consciousness. In response to
                  multiple demonstrations last August and September in front of
                  programme director Lin Wenqi’s office and home in Sunde, the
                  NDRC has made no comments on the increase in arrests
                  surrounding YTTP members, repeated reports of forced labour,
                  alleged malfunctions, and general lack of safety and
                  predictability in the behaviour of citizens who have undergone
                  YTTP-related operations. Critics have also long expressed
                  discontent with the correlation between advancement within
                  YTTP and the teardown of community spaces, private
                  organisations, and non-profits in the arts sector, pointing
                  towards a suspected government objective to bolster the
                  economy through funnelling young workers towards manual labour
                  and civic jobs. As the arts disappear from New Guangzhou and
                  other major cities as ‘non-essential’ activities in the eyes
                  of the CCP, this causative relationship becomes less
                  conjecture and emerges as clarifying truth.
                </p>
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
                FEBRUARY 18 2040
                <p>
                  Announcements
                  <ul>
                    <li>Recap of New Year demonstrations</li>
                    <li>Govt concessions</li>
                    <li>Updated vitamin regimen</li>
                    <li>R&D report</li>
                  </ul>
                </p>
                <p>
                  In attendance{' '}
                  <ul>
                    <li>██████ ████</li>
                    <li>██████████ ██</li>
                    <li>██ ██████████</li>
                    <li>██████ ████████</li>
                    <li>███ ██████████</li>
                    <li>█████ ███████████</li>
                    <li>███ ██████████</li>
                    <li>█████ ██████████</li>
                    <li>███ █████████</li>
                    <li>████ ██████</li>
                    <li>███ ████████</li>
                    <li>████ █████████</li>
                  </ul>
                </p>
                <p>
                  Guangzhou Opera House demonstration
                  <ul>
                    <li>From 6AM, March 7 outside main (North) entrance </li>
                    <li>
                      Responsibilities:
                      <ul>
                        <li>Security/physical reinforcements</li>
                        <li>Delivery of supplies</li>
                        <li>
                          Protestor anonymity/editing and deletion of official
                          surveillance data
                        </li>
                        <li>
                          Internal recordings to be released to journalists
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <p>
                  Press coverage:
                  <ul>
                    <li>New Guangdong Journal</li>
                    <li>Guangzhou Herald</li>
                    <li>Liwan Times</li>
                    <li>Liaoning Daily</li>
                  </ul>
                </p>
                <p>
                  Next Objectives:
                  <ul>
                    <li>Address by Lin Wenqi</li>
                    <li>
                      Demands for funding returned to community arts centres
                    </li>
                  </ul>
                </p>
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

                <p>
                  it’s weird to look in the mirror too, because i feel
                  different, but everything looks the same. they do a good job
                  of the skin graft over the metal panel, like i can still see
                  the capillaries intact underneath. nothing to clue anyone in,
                  except sometimes when i stretch my arms the click sounds a
                  little bit too much like a clang that only i can hear. and the
                  mole on the inside of my wrist. i’ve had it since i was an
                  infant, but they installed something in my forearm, and when i
                  woke up it was gone.
                </p>

                <p>
                  it’s supposed to feel empowering, to steal government
                  resources right out from under their nose by transporting it
                  in my own body. but it’s hard to feel that way when the
                  reality is i was trapped by nurses on all sides and having the
                  sinking feeling that maybe letting them modify the body that
                  carries me through this life wasn’t the right choice to make.
                  it’s too late now.
                </p>

                <p>
                  i feel a little light-headed and drowsy probably still from
                  all the anaesthetic. i was probably knocked out for six hours
                  straight, although they were pretty upfront about it, so i
                  already took the day off in advance. they told me i shouldn’t
                  drive after all the operations, but the new city hospital is
                  so goddamn far from tianhe, and i am not paying for a taxi
                  today.
                </p>
              </div>
            </div>
          )}

          {openFile === 'note2' && (
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
                <p>november 28, 2039</p>

                <p>
                  i went in for the scheduled two week checkup. i’m not sure
                  what else to write down — david said that we’d only start the
                  operations at mayflower after the first two yttp ones, because
                  after that they won’t touch the mainframe anymore. i don’t
                  know how mayflower does their operations without the yttp
                  surgeons noticing, but i guess they have their own r&d
                  department as well that’s racing the govt tech.
                </p>

                <p>
                  mayflower calls their operations vitamins, i think because
                  they’re so frequent. i don’t know much about them; david said
                  that they actually only need to touch the hardware the first
                  time, and then afterwards it’ll all be software patches. i
                  hope it’s true. i’m exhausted by operations and tests, and
                  it’s hard to hide at work. i think it’ll be disclosed to them
                  eventually, but i’m going to hold off if i can help it.
                </p>

                <p>
                  vivia isn’t happy that i’m going through with the programme,
                  even now that i’ve really committed. i still don’t understand
                  why she disapproves, when she was the one who brought me into
                  mayflower in the first place. i don’t see why she can’t be
                  pleased that i’m actually contributing to the cause that she
                  introduced me to. it feels like she won’t let me do more, even
                  though she knows i feel like i’m not doing enough.
                </p>
              </div>
            </div>
          )}

          {openFile === 'note3' && (
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
                <p>december 12, 2039</p>

                <p>it feels so weird oh god</p>

                <p>
                  they added a lot of the sensory augmentations, things like
                  heightened sensitivity with touch and sound, and they said
                  it’d take a little while for my mind to regulate the incoming
                  sensations again, but right now it just feels like everything
                  is so loud and even if not painful to touch i just don’t want
                  to be touched at all. i wonder if things will feel different,
                  if other things, or other people will sound smell taste
                  different to me.
                </p>

                <p>
                  and then also just having essentially, thermometers and
                  odometers and whatever else measuring whatever else wired in
                  my brain? i’m still getting used to having so much information
                  and pushing it aside so i don’t get distracted by it all
                  constantly. i can’t focus on work today at all. it’s 5.3
                  celsius out right now, and my body is telling me this as an
                  objective fact. isn’t there something crazy about this?
                </p>

                <p>
                  they asked if they could shave the side of my head and cut my
                  hair so it’s easier to access the spot they insert the cord to
                  install patches, and when i saw myself in the mirror the first
                  thought i had was how different i looked from her. a mix of
                  dread and relief imagining her standing next to me.
                </p>

                <p>
                  it’s hard not to compare myself to her. isn’’t love a
                  negotiation of how much of my time, mind, body belongs to her?
                </p>
              </div>
            </div>
          )}

          {openFile === 'note4' && (
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
                <p>january 14, 2040</p>

                <p>
                  today they finally added some of the intellectual
                  enhancements. it’s hard to tell if my memory is any better
                  since it doesn’t apply to old memories, only new ones. i guess
                  the things the nurse told me post-op today seem a little
                  sharper. she said that i might experience some nausea for the
                  first three days, but it’s a normal side effect and i should
                  still be able to go to work.
                </p>

                <p>
                  when i was leaving the hospital lobby mom called me out of the
                  blue. in the middle of the conversation she paused and said
                  that i sounded different. i thought she meant the pitch of my
                  voice, but she corrected me and said it was my vocabulary. i
                  was interjecting less english words into my mandarin, and
                  using words she’d never heard me say before. i knew that
                  language abilities were one of the changes, but i didn’t
                  understand how that could manifest until now. i went home
                  after and read one of the japanese textbooks yuchen left at my
                  place from our university days, and the fluency was like
                  flying. i always thought of myself as bilingual, as being not
                  fully chinese. what does this make me now?
                </p>

                <p>
                  i wonder if these changes to my brain will make me a better
                  writer. can someone who doesn’t have the enhancements, like
                  vivia, parse things, create, think less effectively than i can
                  now? is that a terrible thing to wonder? i think a worse,
                  creeping fear is that it will diminish my ability to think for
                  myself. are they putting political ideas in my head already?
                  is that what mayflower is going to do at my next vitamin—will
                  i just be a vessel bouncing between ideological drugs? do i
                  care that ideas are being put in my head really, as long as
                  they’re not unoriginal and boring, and make me a better writer
                  in the long run?
                </p>

                <p>is that so terrible to wonder?</p>
              </div>
            </div>
          )}

          {openFile === 'note5' && (
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
                <p>february 22, 2040</p>

                <p>
                  today they upped my physical strength, except they must’ve
                  done it wrong because it malfunctioned. when i called to tell
                  them they fed me through tubes of call centres just to make a
                  report that i feel like won’t go anywhere. i’ve texted david
                  about it but he hasn’t replied but i don’t want to wait until
                  i see him sunday if it’s a real problem
                </p>

                <p>which of course it is, a real problem</p>

                <p>
                  i had barely been home for an hour after my appointment when
                  vivia came over, with all her new manuscripts in hand, and i
                  was tired and she was asking me to read them, and my arm felt
                  strange and i hit her in the face. but it must’ve been an
                  accident, and i keep replaying the moment over and over,
                  because maybe i felt some spark in my arm when i move it to
                  touch her. i know i know i know i haven’t been feeling the
                  most honest or good or supportive, because she got the grant
                  lately for her debut play at the opera house, and something
                  about it has been gnawing at me. it’s not jealousy, but it’s a
                  feeling i can’t describe. but i’ve been searching through my
                  memory for the evidence that it wasn’t just me, it was yttp,
                  it was the government, it was mayflower, it just wasn’t me.
                </p>

                <p>
                  and she says it’s fine, and no more apologies can change
                  anything, but i’m sitting here feeling like a half-loaded gun
                  and
                </p>

                <p>
                  agshliuargh;qRIOqorfhwea;a’sksa i just don’t know, don’t feel
                  in control of my body
                </p>
              </div>
            </div>
          )}

          {openFile === 'note6' && (
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
                <p>march 6, 2040</p>

                <p>
                  one interesting feature that has been rumoured amongst the
                  public (although i knew—david had confirmed that some other
                  mayflower agents already have this installed) was recording
                  and playback. through my senses, i mean. they didn’t give me
                  much information on where the data is stored and how to access
                  it, which makes me think it’s being sent directly to yttp, but
                  i’m pretty sure mayflower has technology to intercept it and
                  replace those records with dummy data.
                </p>

                <p>
                  it’s supposed to be a feature i can turn on at will, like a
                  camera or mic. i think i’ve been able to take a few standalone
                  pictures, but i’m not sure. it’s like there’s a feeling in my
                  chest, or my head, or… i don’t know. i haven’t been feeling
                  the most in touch with my body recently, especially with these
                  other… entities interfering with it, good or bad. but then
                  there’s this almost shutter-like click in my head, and i don’t
                  know if it’s a real physical sound pressing waves into the air
                  or if it’s just a loud part of my imagination, and the
                  singular frame of view through my eyes in that moment becomes
                  burning crisp in my memory, more than any other moment
                  surrounding it, so i think it worked. this could come in handy
                  with my articles and reporting actually—i was thinking of
                  telling my editor soon.
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
              name='Feb2040_CNYDemonstrations_draft1'
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
              name='Mar2040_Conflict'
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
              name='18_02_2040'
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
            {/* <Icon
              id='minutes2'
              name='04_03_2040'
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
            ></Icon> */}
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
              name='22_02_2040'
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
        {/* 
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
        ></Icon> */}
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
