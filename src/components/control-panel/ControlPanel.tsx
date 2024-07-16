import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicIcon from '@mui/icons-material/Mic';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import './ControlPanel.css';

interface ControlsProps {
  timeElapsed: string;
}

const ControlPanel = ({ timeElapsed }: ControlsProps) => {

  const shareScreen = () => {
   console.log('🖥');
  }

  const toggleMic = () => {
    console.log('🎤');
  }

  const toggleCam = () => {
    console.log('📷');
    
  };
  
  return (
    <div className='controls'>
      <div className='live-indicator'>
        <div className='live-btn'>LIVE</div>
        <span className='timer'>{timeElapsed}</span>
      </div>

    <div className='buttons-wrapper'>
      <button onClick={shareScreen}>
        <span>שיתוף</span>
        <PresentToAllIcon sx={{width: 15}}/>
      </button>

      <button onClick={toggleMic}>
        <span>מיקרופון</span>
        <MicIcon sx={{width: 15}}/>
      </button>

      <button onClick={toggleCam}>
        <span>מצלמה</span>
        <VideocamIcon sx={{width: 15}}/>
      </button>
    </div>
    </div>
  );
};

export default ControlPanel;
