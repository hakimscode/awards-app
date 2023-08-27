import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import UsersEntity from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async create(createUsersDto: CreateUsersDto) {
    const { email } = createUsersDto;

    const newUsers = new UsersEntity();
    newUsers.email = email;
    return this.usersRepository.save(this.usersRepository.create(newUsers));
  }

  async findOne(email: string): Promise<UsersEntity> {
    const users = await this.usersRepository.findOne({
      select: ['id', 'email'],
      where: {
        email,
      },
    });

    return users;
  }
}
