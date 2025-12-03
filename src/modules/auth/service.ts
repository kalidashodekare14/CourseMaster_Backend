import { User } from "../../model/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from "../../config/env";

export const AuthService = {
    registerUser: async (payload: any) => {
        const { email, password, fullName } = payload;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists with this email');
        }
        const passwordHash = await bcrypt.hash(password, 14);
        const newUser = await User.create({
            email: email,
            password: passwordHash,
            fullName: fullName
        });
        return newUser;
    },
    loginUser: async (payload: any) => {
        const { email, password } = payload;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, config.jwt_secret, {
            expiresIn: '7d'
        })

        return { user, token };

    }
}