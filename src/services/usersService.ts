import { User } from "../dataAccess/models/User";
import { NotFoundException } from "../validators/exceptions/notFoundException";

export const getUser = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email: email, password: password } });
    if (!user) throw new NotFoundException("User not found.");
    return user;
}