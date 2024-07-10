import express from 'express'
import jwt from 'jsonwebtoken'
import userModel from '../model/UserModel.js';

const authRouter = express.Router();

// Middleware to verify token and attach user to the request
const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await userModel.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Route to get user data
authRouter.get('/me', auth, (req, res) => {
    res.status(200).json(req.user);
});

export default authRouter;
