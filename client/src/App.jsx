import React, {useState} from "react"
import CalculateForm from "./Form/CalculateForm"
import Map from './Map/Map';



const App = () => {

   const [state, setState] = useState({
     distance: null,
     point1: null,
     point2: null,
     markers: []
   });

   const stateToNull = () => {
     setState({
       ...state,
       distance: null
     })
   }


    return (
        <>
            {
              state.distance && state.distance !== 'одна!' && state.distance !== 'NaN km'? 
              <Map  point1= {state.point1} point2= {state.point2} markers= {state.markers} distance= {state.distance} recalculate= {stateToNull}/>
              :
              <CalculateForm back= {stateToNull}  onCalculated={(distance, point1, point2) =>  setState({
                ...state,
                distance,
                point1,
                point2,
                markers: [{
                  markerOffset: 7,
                  name: "1",
                  coordinates: [...point1].join('').split(',').map(Number)
                },
                {
                  markerOffset: 7,
                  name: "2",
                  coordinates: [...point2].join('').split(',').map(Number)
                }]
              })} distance={state.distance}/>
            }
            
               
        </>
    )
}


export default App