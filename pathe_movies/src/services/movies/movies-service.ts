import movieRepositoryModel from 'src/repositories/movies-repository/moviesRespositoryModel';
import MovieModelService from './movies-models-services';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from 'src/repositories/movies-repository/moviesRepository';
import MoviesCandiesModelService from './movies-candies-models-service';
import CandyModelService from './candies-models-service';

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

  async findAllMovies(): Promise<MovieModelService[]> {
    return this.moviesRepository.findAllMovies();
  }

  async findAllCandies(): Promise<CandyModelService[]> {
    return this.moviesRepository.findAllCandies();
  }

  async findAllCandiesMovies(): Promise<MoviesCandiesModelService> {
    const movies = await this.moviesRepository.findAllMovies();
    const candies = await this.moviesRepository.findAllCandies();

    const moviesCandies: MoviesCandiesModelService = {
      movies: movies,
      candies: candies,
    };

    return moviesCandies;
  }

  async findOneMovie(id: number): Promise<MovieModelService> {
    return this.moviesRepository.findOneMovies(id);
  }

  async updateOneMovie(
    id: number,
    updateMoviesDto: MovieModelService,
  ): Promise<MovieModelService> {
    const moviesRepositoryObject: movieRepositoryModel = {
      director: updateMoviesDto.director,
      duration: updateMoviesDto.duration,
      nationality: updateMoviesDto.nationality,
      realease_date: updateMoviesDto.realease_date,
      synopsis: updateMoviesDto.synopsis,
      title: updateMoviesDto.title,
    };
    return this.moviesRepository.updateMovie(id, moviesRepositoryObject);
  }

  async deleteOneMovie(id: number): Promise<MovieModelService> {
    return this.moviesRepository.removeMovie(id);
  }
}
