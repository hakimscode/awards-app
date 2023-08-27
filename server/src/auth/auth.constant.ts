import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const SECRET_KEY = configService.get('AWARDS_JWT_SECRET_KEY');
