import { model, Schema } from 'mongoose';

interface ICourse {
    title: string;
    description: string;
    thumbnailUrl: string;
    price: number;
}

export const courseModel = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

export const Course = model<ICourse>('Course', courseModel);