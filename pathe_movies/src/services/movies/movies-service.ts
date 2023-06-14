import movieRepositoryModel from 'src/repositories/movies-repository/moviesRespositoryModel';
import MovieModelService from './movies-models-services';

import { Injectable } from '@nestjs/common';
import { MoviesRepository } from 'src/repositories/movies-repository/moviesRepository';
import MovieModel from 'src/controllers/movies/movies-model';

@Injectable()
export class MovieService {
  constructor(private moviesRepository: MoviesRepository) {}

  async searchForMovies(movies: MovieModelService): Promise<void> {
    const moviesRepositoryObject: movieRepositoryModel = {
      director: movies.director,
      duration: movies.duration,
      nationality: movies.nationality,
      realease_date: movies.realease_date,
      synopsis: movies.synopsis,
      title: movies.title,
    };
    await this.moviesRepository.saveMovie(moviesRepositoryObject);
  }

  async findAllMovies(): Promise<MovieModel[]> {
    return this.moviesRepository.findAllMovies();
  }
}
