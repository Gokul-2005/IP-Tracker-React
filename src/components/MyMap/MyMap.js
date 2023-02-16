import React, { useEffect, useState } from 'react'
import style from './MyMap.module.css'
import { Map, Marker } from "pigeon-maps"

export default function MyMap(props) {
    const arr = [props.mapDetails];
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
        return (
            arr.map( (ele) => {
               return (<Map height={711} defaultCenter={[ele.location.lat, ele.location.lng]} defaultZoom={6}>
                <Marker 
                  width={50}
                  anchor={[ele.location.lat, ele.location.lng]} 
                  color={color} 
                  onClick={() => setHue(hue + 20)} 
                />
                <Marker 
                  width={50}
                  anchor={[ele.location.lat, ele.location.lng]} 
                  color={color} 
                  onClick={() => setHue(hue + 20)} 
                >
                </Marker>
              </Map>)
            }  )
          )

}
