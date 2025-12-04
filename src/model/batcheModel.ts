import { model, Schema, Types } from "mongoose";

export interface IBatch {
    courseId: Types.ObjectId | string;
    batchName: string;
    startDate: Date;
    endDate: Date;
    // instructor: Types.ObjectId | string;
    capacity: number;
    enrolledStudents: string[];
}

const batchSchema = new Schema<IBatch>(
    {
        courseId: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },

        batchName: {
            type: String,
            required: true,
            trim: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        endDate: {
            type: Date,
            required: true,
        },

        // instructor: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true,
        // },

        capacity: {
            type: Number,
            default: 50,
        },

        enrolledStudents: [
            {
                type: Schema.Types.ObjectId,
                ref: "Enrollment",
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Batch = model<IBatch>("Batch", batchSchema);
