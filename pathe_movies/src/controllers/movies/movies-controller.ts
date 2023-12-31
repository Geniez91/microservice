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
import { HttpService } from '@nestjs/axios';
import MoviesCandies from './movies-candies-model';
import { MoviesRepository } from 'src/repositories/movies-repository/moviesRepository';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly movieService: MovieService, // public readonly httpService: HttpService,
    private readonly movieRepo: MoviesRepository,
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
      availableTickets: body.availableTickets,
    };

    const moviesForService: MovieModelService = {
      director: movies.director,
      duration: movies.duration,
      nationality: movies.nationality,
      realease_date: movies.realease_date,
      synopsis: movies.synopsis,
      title: movies.title,
      availableTickets: movies.availableTickets,
    };

    try {
      await this.movieService.searchForMovies(moviesForService);
      return moviesForService;
    } catch (error) {
      throw error;
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
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MovieModel> {
    return await this.movieService.findOneMovie(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMovieDto: MovieModel,
  ): Promise<MovieModel> {
    const movies: MovieModel = {
      director: updateMovieDto.director,
      duration: updateMovieDto.duration,
      nationality: updateMovieDto.nationality,
      realease_date: updateMovieDto.realease_date,
      synopsis: updateMovieDto.synopsis,
      title: updateMovieDto.title,
      availableTickets: updateMovieDto.availableTickets,
    };

    const moviesForService: MovieModelService = {
      director: movies.director,
      duration: movies.duration,
      nationality: movies.nationality,
      realease_date: movies.realease_date,
      synopsis: movies.synopsis,
      title: movies.title,
      availableTickets: movies.availableTickets,
    };
    return await this.movieService.updateOneMovie(+id, moviesForService);
  }

  @Patch(':id/update-ticket')
  async updateAvailableTickets(
    @Param('id') id: number,
    @Body('ticketCount') ticketCount: number,
  ) {
    const updatedMovie = await this.movieRepo.updateQuantity(id, ticketCount);
    return updatedMovie;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<MovieModel> {
    return this.movieService.deleteOneMovie(+id);
  }
}
