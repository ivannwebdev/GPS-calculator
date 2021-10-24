import { Router } from 'express';
import  getDistanceInKm  from './../distance/index.js';

const router = Router().get('/distance', (req, res) => {
    const {lon1, lon2, lat1, lat2} = req.query;
    const distance = getDistanceInKm(lon1, lat1, lon2, lat2)
    res.json({distance: `${distance} km`})
})

export default router;