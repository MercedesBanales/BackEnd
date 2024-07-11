import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { LoginRequest } from '../models/requests/LoginRequest';
import { NotFoundException } from '../validators/exceptions/notFoundException';
import { LoginResponse } from '../models/responses/LoginResponse';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req: Request, res: Response) => {
    try {
        const request: LoginRequest = req.body;
        const user = await usersService.getUser(request.email, request.password);
        const t = process.env.JWT_SECRET;
        const token = jwt.sign(
            { 
                id: user.getDataValue("id"), 
                name: user.getDataValue("name"), 
                email: user.getDataValue("email")
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
        const response: LoginResponse = { token: token, message: "Logged in successfully", succeeded: true };
        return res.status(200).send(response);

    } catch (error:any) {
        let code = 500;
        if (error instanceof NotFoundException) code = 404;
        return res.status(code).send({ message: error.message });
    }
}