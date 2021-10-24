import axios from "axios"

export const getDistance = async (coordinates1, coordinates2) => {
    const ar1 = coordinates1.split(',').map(Number)
    const ar2 = coordinates2.split(',').map(Number)
    if(ar1.length > 2 || ar2.length > 2) return 'одна!'
    const [lon1, lat1] = ar1
    const [lon2, lat2] = ar2
    const response = await axios.get(`http://localhost:5000/app/distance?lon1=${lon1}&lat1=${lat1}&lon2=${lon2}&lat2=${lat2}`)
    
    return response.data.distance
}