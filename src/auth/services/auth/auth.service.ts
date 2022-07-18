import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    console.log('inside validateUser');
    const userDB = await this.userService.findUserByUsername(username);
    console.log(userDB);
    if (userDB && userDB.password === password) {
      console.log('User validation success!');
      return userDB;
    }
    console.log('User validation failed!');
    return null;
  }
}