import { model, Schema, Types } from 'mongoose';



export interface ILesson {
    moduleId: Types.ObjectId | string;
    title: string;
    contentUrl: string;
    order?: number;
}

export const lessonSchema = new Schema<ILesson>(
    {
        moduleId: {
            type: Schema.Types.ObjectId,
            ref: "Module",
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        contentUrl: {
            type: String,
            required: true,
            trim: true,
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

export const Lesson = model<ILesson>("Lesson", lessonSchema);