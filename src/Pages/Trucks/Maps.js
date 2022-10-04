import React,{ useMemo } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import './Trucks.css'
function Map(){
    const center=useMemo(()=>({lat:11,lng:77}),[]);
    return(
        <GoogleMap zoom={9} center={center} mapContainerClassName='map_container'>
            <Marker position={{lat:13.0827,lng:80.2707}}></Marker>
            <Marker position={{lat:9.9312,lng:76.2673}}></Marker>
            <Marker position={{lat:13,lng:77}}></Marker>
        </GoogleMap>
    )
}
export default Map;