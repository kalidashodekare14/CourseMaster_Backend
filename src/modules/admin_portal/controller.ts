import { Request, Response } from 'express';
import { adminService } from './service';
import sendResponse from '../../utils/sendResponse';

export const courseCreateController = async (req: Request, res: Response) => {
    const result = await adminService.courseCreated(req.body);
    sendResponse(res, {
        success: true,
        message: "Course created successfully",
        data: result
    })
}
export const batchCreateController = async (req: Request, res: Response) => {
    const result = await adminService.batchCreate(req.body);
    sendResponse(res, {
        success: true,
        message: "Batch created successfully",
        data: result
    })
}

export const moduleCreateController = async (req: Request, res: Response) => {
    const result = await adminService.moduleCreate(req.body);
    sendResponse(res, {
        success: true,
        message: "Module created successfully",
        data: result
    })
}

export const lessonCreateController = async (req: Request, res: Response) => {
    const result = await adminService.lessonCreate(req.body);
    sendResponse(res, {
        success: true,
        message: "Lesson created successfully",
        data: result
    })
}

export const courseEnrollController = async (req: Request, res: Response) => {
    const result = await adminService.courseEnroll(req.body);
    sendResponse(res, {
        success: true,
        message: "Student enrolled successfully",
        data: result
    })
}

