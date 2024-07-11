import { User } from "../domain/user";
import { NotFoundException } from "../validators/exceptions/notFoundException";

const users: User[] = [ 
    new User (1, 'John Doe', 'john@hotmail.com', '123456'),
    new User (2, 'Jane Doe', 'jane@hotmail.com', '123456')];

export const getUser = (email: string, password: string): User => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) throw new NotFoundException('User not found');
    return user;
}



