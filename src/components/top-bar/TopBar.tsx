import React, { useState } from 'react';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import './TopBar.css';

interface TopBarProps {
    portfolioId: string
}
const TopBar = ({ portfolioId }: TopBarProps) => {
    const [isFullScreen, setIsFullScreen] = useState(true);
    return (
        <div className='topBar'>
            <div className='conferene-setting'>
                <div className='recording'>
                    <span>מקליט</span>
                    <div className='red-circle'></div>
                </div>
                <ShieldOutlinedIcon sx={{width: 18}} />
                <div onClick={() => setIsFullScreen(!isFullScreen)} className="resize-screen">
                    {isFullScreen ? <CloseFullscreenIcon sx={{width: 18}} /> : <OpenInFullOutlinedIcon sx={{width: 18}} />}
                </div>
            </div>

            <div className='conference-details'>
                <div>משרד המשפטים, ועדת ערר לעניני קורונה - השתתפות בהוצאות קבועות</div>
                <div style={{ fontSize: '13px' }}>{portfolioId} תיק מספר</div>
            </div>
        </div>
    )
}


export default TopBar;