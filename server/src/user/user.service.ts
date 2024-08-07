import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    password: string;
};

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'john',
            password: 'changeme',
        },
        {
            id: 2,
            name: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.name === username);
    }
}
