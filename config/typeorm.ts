import { DataSource, DataSourceOptions } from 'typeorm';
import {  ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

 config();
 
 const configService = new  ConfigService();

  export const dataSourceOptions: DataSourceOptions=({
        type: 'mysql',
        host: configService.get('HOST'),
        port: configService.get<number>('PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/config/migrations/*.js'],
        synchronize: false,
      });
    const dataSource = new DataSource(dataSourceOptions)

export default dataSource;
