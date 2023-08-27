import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ValidateUserInput } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async ValidateUser(input: ValidateUserInput): Promise<any> {
    const users = await this.usersService.findOne(input.email);

    if (users) {
      return users;
    }

    return null;
  }

  async Login(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
