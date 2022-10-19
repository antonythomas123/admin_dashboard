import * as React from 'react';
import Badge from '@mui/material/Badge';
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
        <ArrowBackIcon />
        <span className="supply">Supply Chain</span>
      </div>

      <div className="icons">
        <div className='main_icons'>
          <SearchIcon />
        </div>
        <div className='main_icons'>
          <Badge badgeContent={2} color="secondary">
            <NotificationsActiveIcon />
          </Badge>
        </div>

        <div className='main_icons'>
          <Badge badgeContent={4} color="primary">
            <EmailIcon />
          </Badge>
        </div>
        <div className='main_icons'>
          <PersonIcon />
        </div>
      </div>
    </div>
  );
}

export default Header