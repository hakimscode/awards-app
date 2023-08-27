import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ValidateUserInput } from './dto/auth.dto';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'email',
    });
  }

  async validate(email: string): Promise<any> {
    const input: ValidateUserInput = {
      email,
    };
    const user = await this.authService.ValidateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
