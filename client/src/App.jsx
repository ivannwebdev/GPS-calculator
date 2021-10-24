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

   window.state = state


    return (
        <>
            
            
                <CalculateForm  onCalculated={(distance, point1, point2) =>  setState({
                  ...state,
                  distance,
                  point1,
                  point2,
                  markers: [{
                    markerOffset: -10,
                    name: "Точка 1",
                    coordinates: [...point1].join('').split(',').map(Number)
                  },
                  {
                    markerOffset: -10,
                    name: "Точка 2",
                    coordinates: [...point2].join('').split(',').map(Number)
                  }]
                })} distance={state.distance}/>
                <Map  point1= {state.point1} point2= {state.point2} markers= {state.markers}/>
                <div>{state.distance}</div>
            
             
                
        
        </>
    )
}


export default App