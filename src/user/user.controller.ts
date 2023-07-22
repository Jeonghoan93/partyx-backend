import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':email')
  async getUser(@Param('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return await this.userService.delete(email);
  }
}
