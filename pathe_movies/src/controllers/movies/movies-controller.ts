import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import MovieModel from './movies-model';
import MovieModelService from 'src/services/movies/movies-models-services';
import { MovieService } from '../../services/movies/movies-service';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import CandyModel from './candies-model';
import MoviesCandies from './movies-candies-model';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly movieService: MovieService, // public readonly httpService: HttpService,
    private readonly httpService: HttpService,
  ) {}

  @Post()
  async create(@Body() body) {
    const movies: MovieModel = {
      director: body.director,
      duration: body.duration,
      nationality: body.nationality,
      realease_date: body.realease_date,
      synopsis: body.synopsis,
      title: body.title,
    };

    const moviesForService: MovieModelService = {
      director: movies.director,
      duration: movies.duration,
      nationality: movies.nationality,
      realease_date: movies.realease_date,
      synopsis: movies.synopsis,
      title: movies.title,
    };

    try {
      await this.movieService.searchForMovies(moviesForService); // Appel de la méthode du service
      console.log('test');
    } catch (error) {
      console.log(error); // Transmettre l'erreur à l'erreur middleware
    }
  }

  @Get()
  async findAll(): Promise<MoviesCandies> {
    const moviesAndCandies = await this.movieService.findAllCandiesMovies();

    return moviesAndCandies;
  }

  @Get()
  async findAllMovie(): Promise<MovieModel[]> {
    const movies = await this.movieService.findAllMovies();

    return movies;
  }
}
