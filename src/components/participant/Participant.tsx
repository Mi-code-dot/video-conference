import React from 'react';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import { ParticipantType } from '../../types/participant.model';
import { Roles } from '../../types/role.enun';
import mojLogo from '../../images/ministry_of_justice_logo.png';
import './Participant.css';

interface ParticipantProps {
  participant: ParticipantType
  toggleMute: (id: number) => void;
};


const Participant = ({ participant, toggleMute }: ParticipantProps) => {
  const participantClass = participant.role === Roles.Judge ? ` participant judge` : `participant lawyer`// ${participant.isMe ? 'me' : '

  // --- general function that retrieve currnet user
  const getMyId = () => {
    return 3;
  }
  const isMe = participant.id === getMyId();

  return (
    <div className={participantClass}>
      <div className={`participant-tag ${isMe ? 'me' : ''}`}>{isMe && 'אני -'}  {participant.party}
      </div>

      <img src={participant.imgUrl} alt={participant.name} className="participant-image" />

      <div className="participant-controler">
        <div onClick={() => toggleMute(participant.id)} className="mute-icon">
          {participant.isMuted ? <MicOffOutlinedIcon sx={{ width: 22 }} /> : <MicNoneOutlinedIcon sx={{ width: 22 }} />}
        </div>

        <div className='participant-details'>
          <div style={{ color: '#0885D0', fontWeight: 500 }}>{participant.role === Roles.Judge ? `ועדת ערר לעניני קורונה` : participant.party} </div>
          <div>{participant.role + ' ' + participant.name}</div>
        </div>

        {participant.role === Roles.Judge && <img className="logo" src={mojLogo} alt='logo'></img>}        
      </div>

    </div>
  );
};

export default Participant;
