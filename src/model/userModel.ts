import { model, Schema } from 'mongoose';

export interface IUser {
    fullName: string;
    email: string;
    password: string;
    role: 'student' | 'instructor' | 'admin';
    createdAt: Date;
}

export const UserModel = new Schema<IUser>(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
)

UserModel.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}

export const User = model<IUser>('User', UserModel);