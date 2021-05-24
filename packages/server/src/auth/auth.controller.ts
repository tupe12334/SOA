import { Prisma } from '.prisma/client';
import { User } from '.prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/')
  ping() {
    return 'welcome to auth controller';
  }
  @Post('login')
  async login(@Body() user: { email: string; password: string }) {
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() user: Prisma.UserCreateInput) {
    try {
      return this.authService.register(user);
    } catch (error) {
      return;
    }
  }
}
