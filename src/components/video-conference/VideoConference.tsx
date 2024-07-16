import React, { useEffect, useState } from 'react';
import Participant from '../participant/Participant';
import ControlPanel from '../control-panel/ControlPanel';
import Sidebar from '../side-bar/SideBar';
import person1 from '../../images/person1.jpg';
import person4 from '../../images/person4.png';
import person3 from '../../images/person3.png';
import person6 from '../../images/person6.jpg';
import './VideoConference.css';
import { Roles } from '../../types/role.enun';
import { Parties } from '../../types/parties.enum';
import TopBar from '../top-bar/TopBar';
import { ParticipantType } from '../../types/participant.model';

interface VideoConferenceProps {
  videoConferenceId: number;
}

const VideoConference = ({videoConferenceId} : VideoConferenceProps) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [participants, setParticipants] = useState<ParticipantType[]>([
      { id: 1, name: 'שלמה הראל', role: Roles.Judge, party: Parties.speaking, isMuted: false, imgUrl: person1 },
      { id: 2, name: 'אסף גדות', role: Roles.Lawyer, party: Parties.responding, isMuted: true, imgUrl: person6 },
      { id: 3, name: 'יעל חלימה', role: Roles.Lawyer, party: Parties.provoked, isMuted: false, imgUrl: person3 },
      { id: 4, name: 'גל קרני', role: Roles.Judge, party: Parties.speaking, isMuted: true, imgUrl: person4 },
      { id: 5, name: 'בועז שור', role: Roles.Lawyer, party: Parties.provoked, isMuted: true, imgUrl: 'https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const toggleMute = (id: number) => {
    setParticipants(participants.map(participant => participant.id === id ? { ...participant, isMuted: !participant.isMuted } : participant));
  };

  const getPortfolioId = (videoConferenceId: number) => {
    //take the portfolio id from db according the videoConferenceId
    return '6498-02-04'
  }
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const judges = participants.filter(p => p.role === Roles.Judge);
  const parties = participants.filter(p => p.role === Roles.Lawyer);
  const portfolioId = getPortfolioId(videoConferenceId);
  return (
    <div className="video-conference">
      <TopBar portfolioId={portfolioId}/>
      <Sidebar participantCount={participants.length} />
      <div className="participants">
        <div className="judges">
          {judges.map(participant => (
            <Participant
              key={participant.id}
              participant={participant}
              toggleMute={toggleMute}
            />
          ))}
        </div>
        <div className="parties">
          {parties.map(participant => (
            <Participant
              key={participant.id}
              participant={participant}
              toggleMute={toggleMute}
            />
          ))}
        </div>

      </div>
      <ControlPanel timeElapsed={formatTime(timeElapsed)} />
    </div>
  );
};

export default VideoConference;
