import movieRepositoryModel from 'src/repositories/movies-repository/moviesRespositoryModel';
import MovieModelService from './movies-models-services';

import { Injectable } from '@nestjs/common';
import { MoviesRepository } from 'src/repositories/movies-repository/moviesRepository';
import MovieModel from 'src/controllers/movies/movies-model';
import MoviesCandies from 'src/controllers/movies/movies-candies-model';
import CandyModel from 'src/controllers/movies/candies-model';

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

  async findAllCandies(): Promise<CandyModel[]> {
    return this.moviesRepository.findAllCandies();
  }

  async findAllCandiesMovies(): Promise<MoviesCandies> {
    const movies = await this.moviesRepository.findAllMovies();
    const candies = await this.moviesRepository.findAllCandies();

    const moviesCandies: MoviesCandies = {
      movies: movies,
      candies: candies,
    };

    return moviesCandies;
  }
}
