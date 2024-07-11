import * as usersRepository from '../dataAccess/usersRepository';

export const getUser = (email: string, password: string) => {
    return usersRepository.getUser(email, password);
}