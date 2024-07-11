import { User } from "../dataAccess/models/User";
import { NotFoundException } from "../validators/exceptions/notFoundException";

let activeUser: User | null = null;

export const getUser = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email: email, password: password } });
    if (!user) throw new NotFoundException("User not found.");
    return user;
}

export const getActiveUser = ()=> {
    return activeUser;
}

export const setActiveUser = (user: User) => {
    activeUser = user;
}