import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparedPassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  async validateUser(username: string, password: string) {
    console.log('inside validateUser');
    const userDB = await this.userService.findUserByUsername(username);
    console.log(userDB);
    if (userDB) {
      const matched = comparedPassword(password, userDB.password);
      if (matched) {
        console.log('User validation success!');
        return userDB;
      } else {
        console.log('Password did not matched');
      }
      return null;
    }
    console.log('User validation failed!');
    return null;
  }
}
