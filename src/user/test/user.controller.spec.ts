import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  afterEach(async () => {
    // Clean up the database after each test
    await userService.prisma.user.deleteMany();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      email: 'test@example.com',
      name: 'Test User',
      password: 'password',
    };

    const user = await userService.createUser(createUserDto);

    expect(user).toBeDefined();
    expect(user.email).toEqual(createUserDto.email);
    expect(user.name).toEqual(createUserDto.name);
    // Don't compare passwords directly, as the stored password should be hashed

    const dbUser = await userService.getUserByEmail(createUserDto.email);
    expect(dbUser).toBeDefined();
    expect(dbUser.email).toEqual(createUserDto.email);
    expect(dbUser.name).toEqual(createUserDto.name);
  });
});
