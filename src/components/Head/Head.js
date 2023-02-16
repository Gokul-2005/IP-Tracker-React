import React, { useEffect, useRef, useState } from 'react'
import Info from '../info/Info';
import style from './Head.module.css'
export default function Head(props) {
    const [ipAddress, setIpAddress] = useState("");
    const [details, setDetails] = useState("");
    const inputRef = useRef(null);

    useEffect( ()=>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ra5bcJgbdzL4EYu0JIYSKsnqZdVFe&ipAddress=${ipAddress}`)
        .then(function (response){
         if(!response.ok){
             throw new Error("Please provide valid IP address");
         }
         return response.json();
         })
         .then(function (data){
            props.detailsState(data);
            setDetails(data);
        //  setDetails(data);
        //  getMap(data);
         return data;
         })
         .catch(err => {
             alert(err);
             console.log(err);
         })
    },[ipAddress] )

  return (
    <div className={style.header} >
        {details?<Info details={details} />:null}
        IP Address Tracker
            <div className={style.searchdiv}><input type="text" placeholder="Search for any IP address or domain" className={style.searchbox} ref={inputRef}/> <button className={style.searchButton} onClick={() => {setIpAddress(inputRef.current.value)} }> <img src='/assets/icon-arrow.svg' /> </button></div>
    </div>
  )
}
