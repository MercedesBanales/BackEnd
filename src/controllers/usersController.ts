import type { Response } from 'express';
import { UserRequest } from '../apiModels/requests/UserRequest';
import { UserResponse } from '../apiModels/responses/UserResponse';

export const getLoggedUser = (req: UserRequest, res: Response) => {
    try {
        const response: UserResponse = { name: req.name, email: req.email };
        return res.status(200).send(response);
    } catch (error:any) {       
        return res.status(error.status).send({ message: error.message });
    }
}