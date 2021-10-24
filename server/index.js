import express  from 'express';
import router from './routes/getDistance.js';
import env from 'dotenv';
import cors from 'cors'

env.config()

const PORT = process.env.PORT || 1000


const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use('/app', router);

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
