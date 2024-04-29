import '../styles/Email.css';
import React from 'react';
import EmailSelect from './EmailSelect';
import file_icon from '../assets/icons/file.png';
import Icon from './Icon';

function EmailWindow({ onHover, setFocus, setOpenFolder, setOpenFile }) {
  const [openTab, setOpenTab] = React.useState('inbox');
  const [emailSelected, setEmailSelected] = React.useState(0);
  const email_previews = [
    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'URGENT NOTICE: Rescheduling Missed Appointment',
      received: '14 April, 2040',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an urgent email notice following up on your missed
            appointment on April 07, 2040, 11:00am at the Guangzhou City
            Hospital.
          </p>

          <p>
            Please reschedule your missed appointment immediately by calling us
            at 213-807-8088.
          </p>

          <p>
            The Youth Transition towards Technology Programme requires following
            a special operation schedule and strict monitoring for your own
            safety. Missing your appointment puts your life at serious risk.
          </p>

          <p>
            Please be reminded that by ignoring official government notices and
            terminating your participation in the Youth Transition towards
            Technology Programme of your own accord you are breaking the law and
            may be legally detained without further notice.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },
    {
      from: 'qian_dvd@126.com',
      subj: 'hey',
      received: '12 April, 2040',
      content: (
        <>
          <p>
            siren — you haven’t been picking up my calls. i know it’s an
            unfortunate situation and i'm sorry for your loss. we're all going
            to miss vivia dearly. but right now i also need you to focus on your
            current mayflower assignments or at least communicate regularly.
            your vitamin has also been overdue and it’s a safety hazard. you
            know this. call me back
          </p>

          <p>-D</p>
        </>
      ),
    },
    {
      from: 'lin_xwen495@163.com',
      subj: 'siren没出什么事吧',
      received: '10 April, 2040',
      content: (
        <>
          <p>
            宝宝，我在想了一下，觉得以最后该决定不加入这个政府YTTP事了吧。你本来就是生体弱，还需要连续做真么多手速，妈妈整的有点担心你。我知道你现在工资不太高，但也不需要这样子。你生活上最重要的是生体健康，没生体是没命的。我知道现在公司有很大压力，外面街上游行也很乱，要注意安全保护自己。
          </p>

          <p>
            你一个人住在新广州还好吗？你明年31岁了，还没找到男朋友。我听说你的高中同学于趁现在也在新广州，你跟他有联系吗？
          </p>
        </>
      ),
    },

    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'ACTION REQUIRED: Rescheduling Missed Appointment',
      received: '07 April, 2040',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated notice that we missed you at your
            appointment today April 07, 2040, 11:00am at the Guangzhou City
            Hospital.
          </p>

          <p>
            Please reschedule your missed appointment immediately. The Youth
            Transition towards Technology Programme requires following a special
            operation schedule and strict monitoring for your own safety. Please
            call us at 213-807-8088 to choose a new appointment date.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    {
      from: 'info@shenzhenfunerals.com.cn',
      subj: 'Service for Vivia Qiong',
      received: '06 April, 2040',
      content: (
        <>
          <p>Dear Siren,</p>

          <p>
            Thank you for contacting Shenzhen Funerals regarding the service for
            Vivia Qiong. We are sorry for your loss, and honoured that you have
            chosen to work with us to commemorate the life of your loved one.
          </p>

          <p>
            We are happy to work with your preferred fate of April 19, 2024 for
            the service. Please call us over the phone at 020-3727-1266 at your
            earliest convenience so we can discuss further with you.
          </p>

          <p>Kind Regards,</p>
          <p>Shenzhen Funerals</p>
        </>
      ),
    },
    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on April 07, 2040',
      received: '05 April, 2040',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on April 07, 2040, 11:00am at the New Guangzhou City
            Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    {
      from: 'lin_xwen495@163.com',
      subj: '',
      received: '13 March, 2040',
      content: (
        <>
          <p>
            宝宝，你还好吗？最近出了什么事了？你两个星期不回我微信，妈妈要着急死了。我下个月还是来新广州见你？
          </p>
        </>
      ),
    },

    {
      from: 'hr@guangzhouherald.com',
      subj: 'Notice of Employee Termination',
      received: '08 March, 2040',
      content: (
        <>
          <p>Dear Siren, &#160;</p>

          <p>
            We acknowledge all the efforts that you&rsquo;ve put into your job
            role as a Journalist at New Guangzhou Herald over the past four
            years. Unfortunately, your performance has recently not met our
            expectations as a premium news agency. We regret to inform you that
            your employment with New Guangzhou Herald stands terminated
            effective immediately as of March 8, 2024. The following are the
            reasons for your dismissal:&#160;&#160;
          </p>

          <li>
            Failure to disclose conflict of interest regarding the government
            Youth Transition toward Technology Programme.{' '}
          </li>
          <li>
            Repeated biased reporting of current events and failure to
            adequately iterate on feedback.
          </li>

          <p>
            Please do not forget to return the business assets under your
            possession. If you have any unpaid leaves remaining, they will be
            paid according to the company&rsquo;s policies. These documents will
            also be mailed to your home address. Feel free to reach out to the
            HR department if you have any queries.&#160;&#8232; We wish you the
            best of luck for your future endeavours.&#160;&#8232;
          </p>

          <p>Regards,&#160;&#160;</p>

          <p>
            Qin Yuehua&#8232;
            <br></br>HR Department&#160;
          </p>
        </>
      ),
    },

    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on March 06, 2040',
      received: '04 March, 2040',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on March 06, 2040, 11:00am at the New Guangzhou City
            Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    {
      from: 'zhu.hailong@guangzhouherald.com',
      subj: 'Feedback on Feb 12 Article',
      received: '16 February, 2040',
      content: (
        <>
          <p>Hey Siren,</p>

          <p>
            Hope you&rsquo;ve been well and safe recently&mdash;I know it must
            be hard reporting from the scene these days at the rallies. I was in
            a meeting with the editor-in-chief yesterday evening. We discussed
            some of your recent work, especially the piece covering the Chinese
            New Year demonstrations. I also looked over your working drafts
            around some of the recent protest reporting.
          </p>

          <p>
            The editor-in-chief has been uncertain about assigning you to more
            reports on the current political situation. I also recently became
            aware that you have a personal stake in YTTP, but haven&rsquo;t
            flagged your conflict of interest in the office yet. I suggest you
            think about ways to protect yourself in these tense times, both
            rhetorically from readers, and as a Herald employee.
          </p>

          <p>
            I&rsquo;m letting you know because I&rsquo;m trying to look out for
            you as your senior. I think it&rsquo;s important that you keep your
            job in times like these.
          </p>

          <p>
            Take care,<br></br> Hailong
          </p>
        </>
      ),
    },

    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on January 14, 2040',
      received: '12 January, 2040',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on January 14, 2040, 11:00am at the New Guangzhou
            City Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },
    {
      from: 'vqiong328@126.com',
      subj: 'fwd: Your Tickets for A Stranger on the River @ Nightless Theatre',
      received: '18 December, 2039',
      content: (
        <>
          <p>--</p>

          <Icon
            id='personal1'
            name='Tickets_76731'
            pic={file_icon}
            x={20}
            y={40}
            clickable={false}
            onHover={onHover}
            inFolder={true}
            onClick={''}
          ></Icon>
        </>
      ),
    },
    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on December 12, 2039',
      received: '10 December, 2039',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on December 12, 2039, 11:00am at the New Guangzhou
            City Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on November 28, 2039',
      received: '26 November, 2039',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on November 28, 2039, 11:00am at the New Guangzhou
            City Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    {
      from: 'yttp@ndrc.gov.cn',
      subj: 'REMINDER: Appointment on November 13, 2039',
      received: '11 November, 2039',
      content: (
        <>
          <p>Dear Siren Lin,</p>

          <p>
            This is an automatically-generated email reminder that your upcoming
            appointment is on November 13, 2039, 11:00am at the New Guangzhou
            City Hospital.
          </p>

          <p>
            Please remember to disclose any medication you have taken in the
            last 48 hours to your nurse at your appointment. You will be asked
            to turn in any mobile and communication or recording devices at the
            beginning of your appointment, and have your belongings returned
            once your appointment is completed.
          </p>

          <p>
            Thank you for your cooperation. Your participation in the Youth
            Transition towards Technology Programme is of utmost honour and
            importance to our country&rsquo;s safety, operation, and prosperity.
            Your service to the nation does not go unappreciated.
          </p>

          <p>Regards,</p>

          <p>
            Youth Transition towards Technology Programme <br></br>National
            Development and Reform Commission <br></br>People&rsquo;s Republic
            of China
          </p>
        </>
      ),
    },

    // {
    //   from: 'vqiong328@126.com',
    //   subj: 'PRINT — for tomorrow!',
    //   received: '',
    //   content: 'thank youuu siren <3',
    // },
    {
      from: 'vqiong328@126.com',
      subj: 'ugrhgsjsdfk',
      received: '09 September, 2037',
      content: (
        <>
          {' '}
          <div>
            augaghadjghhhhh i left my phone @ ur place again. so silly of me
            <br></br>can u drop by w it tmr morning before work? love you
          </div>
        </>
      ),
    },
    {
      from: 'vqiong328@126.com',
      subj: 'lovers exhibit @ blue swallow',
      received: '06 June, 2036',
      content: (
        <>
          <p>hi siren!</p>

          <p>
            there's a small gallery event at blue swallow in liwan on sunday.
            would you be interested in going with me? not for work.
          </p>

          <p>vivia!</p>
        </>
      ),
    },
    {
      from: 'vqiong328@126.com',
      subj: '57th last night',
      received: '27 May, 2036',
      content: (
        <>
          <p>Dear Siren,</p>

          <p>
            I met you last night at the 57th Street gallery opening &mdash; we
            talked but I ended up being pulled away without actually getting
            your contact. I remember mentioned your work and I found your email
            on the Herald website (hope that's not too weird.)
          </p>

          <p>
            Will you be covering any other community arts events soon? It would
            be great to see you again. Or if not, we could grab a coffee.
          </p>

          <p>Warmly, Vivia&#160;</p>
        </>
      ),
    },
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
              <div className='email-metadata'>
                <b>From: </b>
                {email_previews[emailSelected].from}
                <br></br>
                <b>Date: </b>
                {email_previews[emailSelected].received}
                <br></br>
                <b>To: </b>
                linsiren@163.com
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
