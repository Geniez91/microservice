import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candies } from 'src/entities/candies.entity';
import candyRepositoryModel from './candiesRespositoryModel';

@Injectable()
export class CandiesRepository {
  constructor(
    @InjectRepository(Candies)
    private candyRepository: Repository<candyRepositoryModel>,
  ) {}

  async saveMovie(candyData: candyRepositoryModel): Promise<void> {
    try {
      await this.candyRepository.save(candyData);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in a different layer
    }
  }
  async findAllCandies(): Promise<candyRepositoryModel[]> {
    try {
      // Récupérer tous les films depuis la base de données
      const candies = await this.candyRepository.find();

      return candies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
