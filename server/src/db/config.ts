import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { CreateTableUsers1692948698911 } from './migrations/1692948698911-CreateTableUsers';
import { CreateTableAwards1693130380619 } from './migrations/1693130380619-CreateTableAwards';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('AWARDS_DB_HOST'),
  port: configService.get('AWARDS_DB_PORT'),
  username: configService.get('AWARDS_DB_USERNAME'),
  password: configService.get('AWARDS_DB_PASSWORD'),
  database: configService.get('AWARDS_DB_NAME'),
  entities: ['dist/**/*.entity.js'],
  migrations: [CreateTableUsers1692948698911, CreateTableAwards1693130380619],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
