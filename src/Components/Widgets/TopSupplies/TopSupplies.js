import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import ProgressBar from './ProgressBar'
import '../../Widgets/Widgets.css';

function TopSupplies() {
    return (
        <div className='widget'>
          <div className="top">
            <span className='title'>Top Supplies</span>
            <div className='r_side'><MoreVertIcon /></div>
          </div>
          <div>
            <span><FiberManualRecordRoundedIcon color='secondary'/>Mumbai</span>
            <span><FiberManualRecordRoundedIcon color='primary'/>Chennai</span>
          </div>
          Chennai
          <ProgressBar color = 'primary' progress = '80'/>
          Mumbai
          <ProgressBar color = 'secondary' progress = '70'/>
        </div>
      )
}

export default TopSupplies