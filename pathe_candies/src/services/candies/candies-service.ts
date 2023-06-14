import movieRepositoryModel from 'src/repositories/candies-repository/moviesRespositoryModel';
import { Injectable } from '@nestjs/common';
import { CandiesRepository } from 'src/repositories/candies-repository/candiesRepository';
import CandyModelService from './candies-models-services';
import CandyModel from 'src/controllers/candies/candies-model';

@Injectable()
export class CandyService {
  constructor(private candiesRepository: CandiesRepository) {}

  async searchForCandies(candies: CandyModelService): Promise<void> {
    const candiesRepositoryObject: movieRepositoryModel = {
      name: candies.name,
      type: candies.type,
      weight: candies.weight,
      price: candies.price,
    };
    await this.candiesRepository.saveMovie(candiesRepositoryObject);
  }

  async findAllCandies(): Promise<CandyModel[]> {
    return this.candiesRepository.findAllMovies();
  }
}
