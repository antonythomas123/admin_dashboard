import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="left_icon">
          <ArrowBackIcon className="main_icons" />
        <span className='supply'>Supply Chain</span>
      </div>

      
      <div className="icons">
            <SearchIcon className='main_icons'/>
            <NotificationsActiveIcon className='main_icons'/>
            
          
            <EmailIcon className='main_icons'/>
            <span className="counter">2</span>
              <PersonIcon className='main_icons'/>
      </div>
      
    </div>
  );
}

export default Header