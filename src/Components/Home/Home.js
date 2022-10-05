import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import RidesToday from '../Widgets/RidesToday/RidesToday'
import TopSupplies from '../Widgets/TopSupplies/TopSupplies'
import SupplyOverview from '../Widgets/SupplyOverview/SupplyOverview'
import CityInfo from '../Widgets/CityInfo/CityInfo'
import RevenueBreakdown from '../Widgets/RevenueBreakDown/RevenueBreakdown'
import BasicTable from '../Widgets/Table/Table'

import './Home.css'


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
            <div className="second">
              <CityInfo
                city="Chennai"
                count="199"
                completed="33"
                onTime="3.25"
                supplies="330"
                color="#4636f7"
                depr="-3.7"
              />
              <CityInfo
                city="Mumbai"
                count="27"
                completed="2"
                onTime="4.5"
                supplies="20"
                color="#dea233"
                depr="+2.5"
              />
              <CityInfo
                city="Banglore"
                count="44"
                completed="15"
                onTime="10.1"
                supplies="150"
                color="#f720a1"
                depr="+3.1"
              />
            </div>
            <div className="third">
                <BasicTable/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home