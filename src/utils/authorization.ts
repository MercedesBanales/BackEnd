import { NextFunction } from "express";
import { UserRequest } from "../models/requests/UserRequest";
import jwt, { type VerifyErrors } from 'jsonwebtoken';
import { Response } from "express"
import * as usersService from '../services/usersService';

const updateRequest = (req: UserRequest, user: UserRequest) => {
    req.id = user.id;
    req.name = user.name;
    req.email = user.email;
}

export const authenticateToken = () => (req: UserRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token: string | undefined = authHeader?.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET as string, (err: VerifyErrors | null, user: any) => {
      if (err || user.id != usersService.getActiveUser()?.getDataValue("id")) return res.sendStatus(403);
      updateRequest(req, user)
      next();
    });
}