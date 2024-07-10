import { User } from '../domain/user';

export class UsersRepository {
    private users: User[] = [];

    public getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}