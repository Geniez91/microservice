import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entities/movies.entity';
import { MovieService } from './services/movies/movies-service';
import { MoviesController } from './controllers/movies/movies-controller';
import { MoviesRepository } from './repositories/movies-repository/moviesRepository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Movies]), HttpModule],
  controllers: [MoviesController],
  providers: [MovieService, MoviesRepository],
})
export class MoviesModule {}