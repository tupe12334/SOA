import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { IUser, userModel } from 'src/mongo/models/User';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async login(user: { email: string; password: string }) {
    const dbUser = await userModel.findOne({ email: user.email });
    // console.log(dbUser);

    // await this.prismaService.user.findUnique({
    //   where: { email: user.email },
    // });
    const loginPassword = crypto
      .createHmac('sha256', user.password)
      .digest('hex');
    if (dbUser.password === loginPassword) {
      let payload = `{"email":"${user.email}","id":"${dbUser.id}"}`;
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
  register(user: IUser) {
    try {
      // console.log(user);
      user.password = crypto.createHmac('sha256', user.password).digest('hex');
      // console.log(user);
      if (user.email) {
        return userModel.create({ ...user });
      }
      throw new Error('Error');
      // return this.prismaService.user.create({ data: user });
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
  getUserFromAuthenticationToken(AT: string) {
    const decode = this.jwtService.decode(AT);
    console.log(decode);

    return decode;
  }
}
