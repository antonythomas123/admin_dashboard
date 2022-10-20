import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chart from 'react-apexcharts'


function RevenueBreakdown() {
  const options = {
    labels: [
      'Chennai',
      'Bangalore',
      'Mumbai',
      'Trivandrum'
    ]
  }
  const series = {
    data: [400,300,300,200]
  }
  
  return (
    <div class="widget">
        <div className="top">
          <span className="title">Revenue Breakdown</span>
          <div className='r_side'><MoreVertIcon /></div>
        </div>
        <div className="donut">
          <Chart 
            type='donut'
            options={options}
            series={series.data}
            width="270"
          />
        </div>
        
    </div>
  )
}

export default RevenueBreakdown