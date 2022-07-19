import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { encodedPassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [];
  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  createUser(createUserDto: CreateUserDto) {
    const password = encodedPassword(createUserDto.password);
    console.log(password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }
  findUserByUsername(username: string) {
    console.log(username);
    return this.userRepository.findOne({ where: { username: username } });
  }
  findUserById(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }
}
