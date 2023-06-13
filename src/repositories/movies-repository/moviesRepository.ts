import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { movieRepositoryModel } from '../movies-repository/moviesRespositoryModel';
import { Movies } from 'src/entities/movies.entity';
import MovieModel from 'src/controllers/movies/movies-model';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<movieRepositoryModel>,
  ) {}

  async saveMovie(movieData: movieRepositoryModel): Promise<void> {
    try {
      await this.movieRepository.save(movieData);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in a different layer
    }
  }
  async findAllMovies(): Promise<MovieModel[]> {
    try {
      // Récupérer tous les films depuis la base de données
      const movies = await this.movieRepository.find();

      return movies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
