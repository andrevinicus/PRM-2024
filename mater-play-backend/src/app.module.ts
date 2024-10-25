import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie-entity';
import { MovieService } from './services/movie-services';
import { MovieController } from './controllers/movie-controller';
import { Category } from './entities/category-entity';
import { CategoryController } from './controllers/category-controller';
import { CategoryService } from './services/category-services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: true,
      entities: [Category, Movie],
    }),
    TypeOrmModule.forFeature([Category,Movie]),
  ],
  controllers: [CategoryController,MovieController],
  providers: [CategoryService,MovieService],

})
export class AppModule {}
