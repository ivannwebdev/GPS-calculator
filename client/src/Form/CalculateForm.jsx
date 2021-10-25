import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { getDistance } from "../api/api"
import {Button} from 'react-bootstrap'
import Error from "./Error/Error"

const CalculateForm = ({onCalculated, distance, back}) => {

    const [state, setState] = useState({
        point1: '',
        point2: '',

    })

    const calculate = async() => {
        const response = await getDistance(state.point1, state.point2)
        onCalculated(response, state.point1, state.point2);
    }

    
    return(
        <div style= {distance === 'NaN km' || distance === 'одна!'? {marginLeft: 75, marginTop: 10, padding: 10}: {padding: 5, marginLeft: 75, marginTop: 10, height: 400, width: 350, border: '1px solid black', paddingLeft: 75, paddingTop: 50, borderRadius: 5, backgroundColor: 'whitesmoke'}}>
        
            {
            distance ? <div>
                    {distance === 'NaN km' || distance === 'одна!' ? <Error back= {back}/> : `расстояние между точками: ${distance}`}
            </div>
            : 
            
            <Form >
            <Form.Group className="mb-3">
                <Form.Label>Точка 1</Form.Label>
                <Form.Control onChange= {e => setState({...state, point1: e.target.value})} value= {state.point1} style= {{width: 175}} placeholder="долгота1, широта1 " />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Точка 2</Form.Label>
                <Form.Control onChange= {e => setState({...state, point2: e.target.value})} value= {state.point2} style= {{width: 175}} placeholder="долгота2, широта2"/>
            </Form.Group>
            <Button onClick= {calculate}> Рассчитать </Button>
        </Form>
        
            }
            
        
        </div>
    )
}

export default CalculateForm