import userModel from '../model/UserModel.js'
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signupUser = async (req, res) => {
    const { username, email, password, dateOfBirth, role, gender, phoneNumber } = req.body;

    if (!username || !email || !password || !dateOfBirth || !role || !gender || !phoneNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    if (!validator.isMobilePhone(phoneNumber)) {
        return res.status(400).json({ message: 'Invalid phone number' });
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: 'Password must be strong' });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            username,
            email,
            password: hashedPassword,
            dateOfBirth,
            role,
            gender,
            phoneNumber
        });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({ message: 'User created successfully', token: token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}