import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserResponseDto } from './dto/response.dto';
import { UserService } from './service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserResponseDto[]> {
    return await this.userService.findAll();
  }

  @Delete()
  async deleteUser(@Param('id') userId: number) {
    return await this.userService.remove(userId);
  }
}