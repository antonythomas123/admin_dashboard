import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="header"><Header /></div>
            <div className="container">
                <div className="sidebar"><Sidebar /></div>
                {/*<div className="home_container">
                        <RisesToday />
                        <TopSupplies />
                        <Overview />
                        <RisesToday />
    </div>*/}
            </div>
        </div>
    )
}

export default Home