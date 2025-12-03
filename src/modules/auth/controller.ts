import { Request, Response } from 'express';
import { AuthService } from './service';
import sendsendResponse from '../../utils/sendResponse';


export const registerUser = async (req: Request, res: Response) => {
    const result = await AuthService.registerUser(req.body);
    sendsendResponse(res, {
        success: true,
        message: 'User registered successfully',
        data: result
    });
}


export const loginUser = async (req: Request, res: Response) => {
    const result = await AuthService.loginUser(req.body);
    sendsendResponse(res, {
        success: true,
        message: 'User logged in successfully',
        data: result
    });
}