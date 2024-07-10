import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import '../server/middlewares/db.js'
import userRouter from './routes/userRoutes.js'
import authRouter from '../server/middlewares/auth.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users/routes', userRouter)
app.use('/api/users', authRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));



// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

