import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Map from './Maps'
import { useLoadScript } from '@react-google-maps/api';
import './Trucks.css'

function Trucks() {
    const {isLoaded} = useLoadScript({googleMapsApiKey:'AIzaSyAKCgOR9szOTEkJlxs_HKj4ctVD2iwg2Vk'})  
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