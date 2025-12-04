import { Batch } from "../../model/batcheModel";
import { Course } from "../../model/courseModel";
import { Enrolled } from "../../model/enrollModel";
import { Lesson } from "../../model/lessonModel";
import { Module } from "../../model/ModuleModel";



export const adminService = {
    courseCreated: async (courseData: any) => {
        const { title, description, thumbnailUrl, price } = courseData;
        const newCourse = await Course.create({
            title,
            description,
            thumbnailUrl,
            price
        });
        return newCourse;
    },
    batchCreate: async (batchData: any) => {
// Input (courseId, batchName, startDate, endDate, instructor, capacity, enrolledStudents)
        const newBatch = await Batch.create(batchData);
        return newBatch;
    },
    moduleCreate: async (moduleData: any) => {
// Input (courseId, title, order)
        const newModule = await Module.create(moduleData);
        return newModule;
    },
    lessonCreate: async (lessonData: any) => {
// Input (moduleId, title, contentUrl, order)
        const newLesson = await Lesson.create(lessonData);
        return newLesson;
    },
    courseEnroll: async (enrollData: any) => {
        const { studentId, courseId, batchId, paymentStatus, transactionId } = enrollData;
        const existingEnrollment = await Enrolled.findOne({ studentId, courseId, batchId });
        if (existingEnrollment) {
            throw new Error('Student is already enrolled in this course and batch.');
        }
        const newEnrollment = await Enrolled.create({
            studentId,
            courseId,
            batchId,
            paymentStatus,
            transactionId,
            progress: 0,
            completedLessons: []
        });
        if (paymentStatus.toLowerCase() === 'paid') {
            await Batch.findByIdAndUpdate(batchId, {
                $push: { enrolledStudents: newEnrollment._id }
            });
        }

        return newEnrollment;

    },
    // 
}