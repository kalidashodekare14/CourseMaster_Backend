import { en } from "zod/v4/locales";
import { Enrolled } from "../../model/enrollModel"
import { Lesson } from "../../model/lessonModel";
import { Module } from "../../model/ModuleModel";



export const studentService = {
    studentCourseContent: async (studnetData: any) => {
        const { studentId, courseId } = studnetData;

        const enrollment = await Enrolled.findOne({ studentId, courseId })
            .populate({
                path: 'courseId',
                select: 'title description thumbnailUrl price',
            })
            .populate({
                path: 'batchId',
                select: 'batchName startDate endDate',
            })
        if (!enrollment) {
            throw new Error('Enrollment not found for the given student and course.');
        }

        const modules = await Module.find({ courseId }).sort({ order: 1 }).lean();
        const modulesWithLessons = await Promise.all(
            modules.map(async (mod) => {
                const lessons = await Lesson.find({ moduleId: mod._id }).sort({ order: 1 }).lean();
                return { ...mod, lessons };
            })
        );
        return {
            enrollment,
            modules: modulesWithLessons
        }

    },
    getEnrolledCourses: async (studentId: any) => {
        const enrollments = await Enrolled.find({ studentId })
            .populate({
                path: 'courseId',
                select: 'title description thumbnailUrl price',
            })
            .populate({
                path: 'batchId',
                select: 'batchName startDate endDate',
            })
            .lean();
        console.log("Enrollments:", enrollments);
        if (!enrollments || enrollments.length === 0) {
            throw new Error('No enrollments found for the given student.');
        }

        return enrollments;

    }
}