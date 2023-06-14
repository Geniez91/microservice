import { Injectable } from '@nestjs/common';
import { CandiesRepository } from 'src/repositories/candies-repository/candiesRepository';
import CandyModelService from './candies-models-services';

@Injectable()
export class CandyService {
  constructor(private candiesRepository: CandiesRepository) {}

  async searchForCandies(candies: CandyModelService): Promise<void> {
    const candiesRepositoryObject: CandyModelService = {
      name: candies.name,
      type: candies.type,
      weight: candies.weight,
      price: candies.price,
    };
    await this.candiesRepository.saveMovie(candiesRepositoryObject);
  }

  async findAllCandies(): Promise<CandyModelService[]> {
    return this.candiesRepository.findAllCandies();
  }
}
