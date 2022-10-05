import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Map from './Maps'
import { useLoadScript } from '@react-google-maps/api';
import './Trucks.css'

function Trucks() {
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY})  
  return (
    <div className='trucks'>
            <div><Header /></div>
            <div className="container">
                <div className="sidebar"><Sidebar /></div>
                {isLoaded && <Map/>}
            </div>
        </div>
  )
}

export default Trucks;