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