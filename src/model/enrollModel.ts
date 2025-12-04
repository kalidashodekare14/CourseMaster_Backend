import { model, Schema, Types } from 'mongoose';

export interface IEnroll {
    studentId: Types.ObjectId | string;
    courseId: Types.ObjectId | string;
    batchId: Types.ObjectId | string;
    progress: number;
    completedLessons: Types.ObjectId[] | string[];
    paymentStatus: 'unpaid' | 'paid' | 'failed';
    transactionId: string;
}

export const enrollSchema = new Schema<IEnroll>(
    {
        studentId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        courseId: {
            type: Schema.Types.ObjectId,
            ref: 'Course',
            required: true,
        },
        batchId: {
            type: Schema.Types.ObjectId,
            ref: 'Batch',
            required: true,
        },
        progress: {
            type: Number,
            default: 0,
        },
        completedLessons: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Lesson',
            },
        ],
        paymentStatus: {
            type: String,
            enum: ['unpaid', 'paid', 'failed'],
            default: 'unpaid',
        },
        transactionId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Enrolled = model<IEnroll>('Enrolled', enrollSchema);