import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { getDistance } from "../api/api"
import {Button} from 'react-bootstrap'
import styles from './calculateForm.module.css'

const CalculateForm = ({onCalculated, distance}) => {

    const [state, setState] = useState({
        point1: '',
        point2: '',

    })

    const calculate = async() => {
        const response = await getDistance(state.point1, state.point2)
        onCalculated(response, state.point1, state.point2);
    }

    
    return(
        <div style= {{padding: 5, marginLeft: 75, marginTop: 10, height: 210, width: 350,}}>
        
            {
            distance ? <div className= {distance === 'NaN km' || distance === 'одна!'? styles.error: ''}>
                    {distance === 'NaN km' || distance === 'одна!' ? 'Вы ввели некорректные данные': `расстояние между точками: ${distance}`}
            </div>
            : 
            
            <Form >
            <Form.Group className="mb-3">
                <Form.Label>Точка 1</Form.Label>
                <Form.Control onChange= {e => setState({...state, point1: e.target.value})} value= {state.point1} style= {{width: 175}} placeholder="lon1.lon1, lat1.lat1 " />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Точка 2</Form.Label>
                <Form.Control onChange= {e => setState({...state, point2: e.target.value})} value= {state.point2} style= {{width: 175}} placeholder="lon2.lon2, lat2.lat2"/>
            </Form.Group>
            <Button onClick= {calculate}> Рассчитать </Button>
        </Form>
        
            }
            
        
        </div>
    )
}

export default CalculateForm