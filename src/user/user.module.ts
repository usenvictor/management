import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/jwt-stratagy/jwt.strategy';
import * as dotenv from 'dotenv';
dotenv.config()


@Module({
  imports:[
    TypeOrmModule.forFeature([user]),
    
    JwtModule.register({
      global: true,
      secret: process.env.JWTSECRET,
      signOptions: {expiresIn: '1h'},
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true
    })
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [PassportModule, JwtStrategy, UserService]
})
export class UserModule {}
