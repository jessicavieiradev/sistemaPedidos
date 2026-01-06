import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});