import React from 'react'
import style from './Info.module.css'
export default function Info(props) {
  return (
    <div id={style.infodiv}> 
      <div id={style.ipdetail} className={style.details} >IP ADDRESS <h1> {props.details.ip} </h1></div>
      <div id={style.locationdetail} className={style.details} >LOCATION <h1> {props.details.location.city} , {props.details.location.country}  </h1></div>
      <div id={style.timezonedetail} className={style.details} >TIMEZONE <h1> UTC {props.details.location.timezone} </h1></div>
      <div id={style.ipsdetail} className={style.details}>ISP <h1> {props.details.isp} </h1></div>
    </div>
  )
}
