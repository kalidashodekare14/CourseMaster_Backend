import { model, Schema, Types } from "mongoose";


export interface IModule {
    courseId: Types.ObjectId | string;
    title: string;
    order?: number;
}


export const moduleSchema = new Schema<IModule>(
    {
        courseId: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        order: {
            type: Number,
            default: 0,
        },

    },
    {
        timestamps: true,
    }
);

export const Module = model<IModule>("Module", moduleSchema);