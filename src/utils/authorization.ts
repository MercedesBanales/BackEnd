import { NextFunction } from "express";
import { UserRequest } from "../models/requests/UserRequest";
import { User } from "../domain/user";
import jwt from 'jsonwebtoken';
import { Request, Response } from "express"

const updateRequest = (req: UserRequest, user: User) => {
    req.id = user.id;
    req.name = user.name;
    req.email = user.email;
}

export const authenticateToken = () => (req: UserRequest | Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token: string | undefined = authHeader?.split(" ")[1];
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      updateRequest(req, user)
      next();
    });
}