import React from 'react'
import { MoreVertOutlined } from '@mui/icons-material'
import Chart from '../../Chart/Chart'
import '../../Widgets/Widgets.css'

function Overview() {
    return (
        <div className='widget'>
            <div className="top">
                <span className='title'>Supply Overview</span>
                <div className='r_side'><MoreVertOutlined /></div>
            </div><div className="supply_main">
            <div className='cities'>
                <span>Bangalore Supplies</span>
                <div className="supply_chart"><Chart color='purple'/></div>
            </div>
            <div className='cities'>
                <span>Chennai Supplies</span>
                <div className="supply_chart"><Chart color='green'/></div>
            </div>
            <div className='cities'>
                <span>Mumbai Supplies</span>
                <div className="supply_chart"><Chart color='red'/></div>
            </div>
            </div>
        </div>
    )
}

export default Overview