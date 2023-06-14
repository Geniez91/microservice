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
    await this.candiesRepository.saveCandy(candiesRepositoryObject);
  }

  async findAllCandies(): Promise<CandyModelService[]> {
    return this.candiesRepository.findAllCandies();
  }

  async findOneCandy(id: number): Promise<CandyModelService> {
    return this.candiesRepository.findOneCandy(id);
  }

  async updateOneCandy(
    id: number,
    updateCandyDto: CandyModelService,
  ): Promise<CandyModelService> {
    return this.candiesRepository.updateCandy(id, updateCandyDto);
  }

  async deleteOneCandy(id: number): Promise<CandyModelService> {
    return this.candiesRepository.removeCandy(id);
  }
}
