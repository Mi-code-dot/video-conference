import React from 'react';
import mojLogo from '../../images/ministry_of_justice_logo.png';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './SideBar.css';

interface SidebarProps {
  participantCount: number;
}

const Sidebar = ({ participantCount }: SidebarProps) => {
const displayParticipants = () => {
};

const openConferenceDetials = () => {
};

const displayAdmin = () => {
};

const openSetting = () => {
};

const exitConference = () => {
  alert('Are you sure you want to exit this conference?')
  console.log('🚪');
};
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={mojLogo} alt="Ministry of Justice" />
      </div>
      <div className="sidebar-icons">
        <div className="icon" onClick={displayParticipants}>
          <PeopleOutlineOutlinedIcon/>
          <span>אנשים ({participantCount})</span>
        </div>
        <div className="icon" onClick={openConferenceDetials}>
          <BalanceOutlinedIcon/>
          <span>פרטי דיון</span>
        </div>
        <div className="icon" onClick={displayAdmin}>
          <AdminPanelSettingsOutlinedIcon/>
          <span>מנהל דיון</span>
        </div>
        <div className="icon" onClick={openSetting}>
          <SettingsOutlinedIcon/>
          <span>הגדרות</span>
        </div>
      </div>
      <div style={{alignSelf: 'flex-end'}}> 
        <button className='exit-button' onClick={exitConference}>יציאה מהדיון</button>
      </div>
    </div>
  );
};

export default Sidebar;
