import { UserDTO } from "../utils/DTOs/UserDTO";
import * as user from "../dataAccess/repositories/userRepository";

let activeUser: UserDTO | null = null;

export const findUser = async (email: string, password: string) => {
    return await user.findUser(email, password);
}

export const getActiveUser = ()=> {
    return activeUser;
}

export const setActiveUser = (user: UserDTO) => {
    activeUser = user;
}