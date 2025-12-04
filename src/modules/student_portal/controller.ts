import sendsendResponse from "../../utils/sendResponse";
import { studentService } from "./service";
import { Request, Response } from "express";


export const studentCourseContentController = async (req: Request, res: Response) => {
    const result = await studentService.studentCourseContent(req.body);
    sendsendResponse(res, {
        success: true,
        message: "Student course content fetched successfully",
        data: result
    })
}

export const getEnrolledCoursesController = async (req: Request, res: Response) => {
    const { studentId } = req.params;
    const result = await studentService.getEnrolledCourses(studentId);
    sendsendResponse(res, {
        success: true,
        message: "Enrolled courses fetched successfully",
        data: result
    })
}