import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IUser } from 'src/mongo/models/User';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/')
  ping() {
    return 'welcome to auth control nler';
  }
  @Post('login')
  async login(@Body() user: { email: string; password: string }) {
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() user: IUser) {
    try {
      return this.authService.register(user);
    } catch (error) {
      return;
    }
  }
  @Get('verify/:token')
  verify(@Param() token: { token: string }) {
    console.log(token);

    return this.authService.getUserFromAuthenticationToken(token.token);
  }
}
