import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { RegisterUserDto } from '../auth/dto/register-user.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.login(loginUserDto);
    return user;
  }

  @Post('register')
  async register(@Body() createUserDto: RegisterUserDto) {
    const user = await this.authService.register(createUserDto);
    return user;
  }
}
