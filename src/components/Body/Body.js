import React from 'react'
import MyMap from '../MyMap/MyMap'
import style from './Body.module.css'

export default function Body(props) {
  return (
    <div className={style.body}>
        {props.mapDetails ? <MyMap mapDetails={props.mapDetails} /> : null }
    </div>
  )
}
