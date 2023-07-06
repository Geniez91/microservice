import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { movieRepositoryModel } from '../movies-repository/moviesRespositoryModel';
import { Movies } from 'src/entities/movies.entity';
import { Observable, lastValueFrom, map, tap } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import candyRepositoryModel from './candiesRespositoryModel';
import { DiscordService } from 'src/services/discord/discord.service';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<movieRepositoryModel>,
    private readonly httpService: HttpService,
    private readonly discordService: DiscordService,
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
  async findOneMovies(id: number): Promise<movieRepositoryModel> {
    const params: FindOneOptions<movieRepositoryModel> = {
      where: { idMovies: id },
    };

    const movie = await this.movieRepository.findOne(params);

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }
  async updateMovie(
    id: number,
    updateMovieDto: movieRepositoryModel,
  ): Promise<movieRepositoryModel> {
    const oldCandies = await this.movieRepository.findOneBy({
      idMovies: id,
    });

    // Pour les champs NON changés, on affiche les anciens
    Object.keys(updateMovieDto).forEach((key) => {
      if (updateMovieDto[key] !== undefined) {
        oldCandies[key] = updateMovieDto[key];
      }
    });

    const updatedMovie = await this.movieRepository.save(oldCandies);
    return updatedMovie;
  }

  async updateQuantity(
    id: number,
    ticketCount: number,
  ): Promise<movieRepositoryModel> {
    const oldCandies = await this.movieRepository.findOneBy({
      idMovies: id,
    });

    const updateTickets = {
      ...oldCandies,
      availableTickets: oldCandies.availableTickets - ticketCount,
    };

    const updatedMovie = await this.movieRepository.save(updateTickets);

    const msg = {
      message: `${
        oldCandies.availableTickets - ticketCount
      } tickets restants ! pour ${oldCandies.title}`,
    };

    await axios.post('http://localhost:3002/discord', msg);

    return updatedMovie;
  }

  async removeMovie(id: number): Promise<movieRepositoryModel> {
    const deleteMovie = await this.movieRepository.findOneBy({
      idMovies: id,
    });
    await this.movieRepository.delete(deleteMovie);
    return deleteMovie;
  }
}
