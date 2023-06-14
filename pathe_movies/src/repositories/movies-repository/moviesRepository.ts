import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { movieRepositoryModel } from '../movies-repository/moviesRespositoryModel';
import { Movies } from 'src/entities/movies.entity';
import { Observable, lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import candyRepositoryModel from './candiesRespositoryModel';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<movieRepositoryModel>,
    private readonly httpService: HttpService,
  ) {}

  async saveMovie(movieData: movieRepositoryModel): Promise<void> {
    try {
      await this.movieRepository.save(movieData);
    } catch (error) {
      throw error;
    }
  }
  async findAllMovies(): Promise<movieRepositoryModel[]> {
    try {
      const movies = await this.movieRepository.find();

      return movies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAllCandies(): Promise<candyRepositoryModel[]> {
    try {
      const candyServiceUrl = 'http://localhost:3001/candies';
      let response: Observable<AxiosResponse<candyRepositoryModel[]>>;
      let candies: candyRepositoryModel[];

      // eslint-disable-next-line prefer-const
      response = this.httpService.get(candyServiceUrl);

      const candyResponse = await lastValueFrom(response);

      // eslint-disable-next-line prefer-const
      candies = candyResponse.data;

      return candies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
