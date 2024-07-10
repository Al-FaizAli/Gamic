import express from 'express'
import { signupUser } from '../middlewares/Signup.js';
import { loginUser } from '../middlewares/Login.js';



const userRouter = express.Router();

// Signup route
userRouter.post('/signup', signupUser);

// Login route
userRouter.post('/login', loginUser);

export default userRouter;