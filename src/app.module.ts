import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TodolistModule } from './todolist/todolist.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, TodolistModule, UserModule,
      ConfigModule.forRoot({
        isGlobal: true
     })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
