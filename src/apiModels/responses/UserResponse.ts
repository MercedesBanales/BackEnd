import { Response } from 'express';

export interface UserResponse {
    name?: string;
    email?: string;
    token?: string
}