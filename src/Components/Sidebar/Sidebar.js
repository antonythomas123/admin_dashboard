import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Items({title,icon,link}){
  return(
    <li className='item' id = {window.location.pathname === Link ? "active":""} 
        onClick={()=>{window.location.pathname = link;}}>
      <span className="icon">{icon}</span>
      <span className='title'>{title}</span>
    </li>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_main">
        <ul>
          <Items icon={<HomeIcon/>} title='Dashboard' link = '/'/>
          <Items icon={<DashboardIcon/>} title='Trucks' link = '/trucks'/>
          <Items icon={<ContentCopyIcon/>} title='Supplies' />
        </ul>
        
        <span className="heading">HELP</span>
        <ul>
          <Items icon={<TextSnippetIcon/>} title='Terms'/>
          <Items icon={<QuestionAnswerIcon/>} title='Support'/>
          <Items icon={<HelpOutlineIcon/>} title='FAQ'/>
        </ul>
        
        <span className="heading">SETTINGS</span>
        <ul>
          <Items icon={<UpdateIcon/>} title='Upgrade'/>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar