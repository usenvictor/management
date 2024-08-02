import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { updateUserDto } from 'src/dto/update-user.dto';
import { user } from 'src/entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(@InjectRepository(user) private userRepo: Repository<user>){}
    create(CreateUserDto: CreateUserDto) {
        return 'This action adds a new user';
    }

    findAll() {
        return 'This action return all user';
    }

    findOne(id: number) {
        return 'This action returns a #${id} user';
    }

    update(id: number, updateUserDto: updateUserDto) {
        return 'This action updates a #${id} user';
    }

    remove(id: number) {
        return 'This action remove a #${id} user';
    }
}
