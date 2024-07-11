import { UserDTO } from "../../utils/DTOs/UserDTO";
import { NotFoundException } from "../../validators/exceptions/notFoundException";
import { User } from "../models/User";

export const findUser = async (email: string, password: string): Promise<UserDTO> => {
    const user = await User.findOne({ where: { email: email, password: password } });
    if (!user) throw new NotFoundException("User not found.");
    return { id: user.getDataValue("id"), name: user.getDataValue("name"), email: user.getDataValue("email") };
}

