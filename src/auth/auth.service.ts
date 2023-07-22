import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { RegisterUserDto } from '../auth/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(public prisma: PrismaService) {}

  async login(data: LoginUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user || !user?.hashedPassword) {
      throw new Error('Invalid credentials');
    }

    const isCorrectPassword = await bcrypt.compare(
      data.password,
      user.hashedPassword,
    );

    if (!isCorrectPassword) {
      throw new Error('Invalid password');
    }

    return user;
  }

  async register(data: RegisterUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const { email, name, password } = data;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return user;
  }
}
