import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import RidesToday from '../Widgets/RidesToday/RidesToday'
import TopSupplies from '../Widgets/TopSupplies/TopSupplies'
import SupplyOverview from '../Widgets/SupplyOverview/SupplyOverview'

import './Home.css'
import RevenueBreakdown from '../Widgets/RevenueBreakDown/RevenueBreakdown'

function Home() {
    return (
      <div className="home">
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="home_container">
            <div className="first">
              <RidesToday />
              <TopSupplies />
              <SupplyOverview />
              <RevenueBreakdown />
            </div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
        </div>
      </div>
    );
}

export default Home