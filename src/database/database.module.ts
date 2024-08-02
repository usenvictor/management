import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(ConfigService:ConfigService)=>({
        type: 'mysql',
        host: ConfigService.get('HOST'),
        port: +ConfigService.get<number>('PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject:[ConfigService]
    }),
  ]
 
})
export class DatabaseModule {}
