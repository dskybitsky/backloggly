import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(name: string, password: string): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(name);

        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.name };

        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}