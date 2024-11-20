import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.authService.registerUser(createUserDto);
    } catch (error) {
      throw new ConflictException(error.message || 'Unexpected error');
    }
  }
}
