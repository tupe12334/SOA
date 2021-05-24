import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto';
import { Prisma } from '.prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(user: { email: string; password: string }) {
    const dbUser = await this.prismaService.user.findUnique({
      where: { email: user.email },
    });
    const loginPassword = crypto
      .createHmac('sha256', user.password)
      .digest('hex');
    if (dbUser.password === loginPassword) {
      let payload = `${user.email}${dbUser.id}`;
      const accessToken = this.jwtService.sign(payload);
      return {
        status: 200,
        data: true,
        meta: {
          dbUser,
          jwt: {
            expires_in: 3600,
            access_token: accessToken,
            user_id: payload,
          },
        },
      };
    } else {
      return { data: false, meta: null };
    }
  }
  register(user: Prisma.UserCreateInput) {
    try {
      console.log(user);
      user.password = crypto.createHmac('sha256', user.password).digest('hex');
      console.log(user);
      return this.prismaService.user.create({ data: user });
    } catch (error) {
      throw new Error('Error');
    }
  }
  //   async changePassword(
  //     user: { email: string; password: string },
  //     newPassword: string,
  //   ) {
  //     const dbUser = await this.login(user);
  //     if (dbUser.data) {
  //       const newUser = await this.prismaService.user.update({
  //         where: { email: user.email },
  //         data: { password: newPassword },
  //       });
  //       return { data: true, meta: { user: newUser } };
  //     } else {
  //       return { data: false, meta: null };
  //     }
  //   }
}