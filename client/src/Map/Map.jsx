import React from "react"
import {Button} from 'react-bootstrap'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const Map = ({markers, distance, recalculate}) => {
  
    return <>
        <span>
          <Button style= {{color: 'black', marginTop: -7, marginLeft: 100}} variant= 'primary'  onClick= {recalculate}> Другая точка </Button>
        </span>
        <span style= {{display: 'inline-block', fontSize: 21, paddingLeft: 17, fontWeight: 400, maxWidth: 390, maxHeight: 40, width: 390, height:40, marginLeft: 350, marginTop: 20 }}>
          Расстояние между точками: {distance}
        </span>
        <ComposableMap>
    <Geographies geography={geoUrl}>
      {({geographies}) => geographies.map(geo =>
        <Geography key={geo.rsmKey} geography={geo} />
      )}
    </Geographies>
    {markers.length && markers.map(({ name, coordinates, markerOffset }) => (
    <Marker key={name} coordinates={coordinates}>
      <g
        fill="none"
        stroke="#FF5533"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-12, -24)"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
      </g>
      <text
        textAnchor="middle"
        y={markerOffset}
        style={{ fontFamily: "system-ui", fill: "#008000", fontSize: 12 }}
      >
        {name}
      </text>
    </Marker>
  ))}
  </ComposableMap>
    </>
}

export default Map