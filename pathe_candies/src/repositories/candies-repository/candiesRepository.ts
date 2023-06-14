import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Candies } from 'src/entities/candies.entity';
import candyRepositoryModel from './candiesRespositoryModel';

@Injectable()
export class CandiesRepository {
  constructor(
    @InjectRepository(Candies)
    private candyRepository: Repository<candyRepositoryModel>,
  ) {}

  async saveCandy(candyData: candyRepositoryModel): Promise<void> {
    try {
      await this.candyRepository.save(candyData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async findAllCandies(): Promise<candyRepositoryModel[]> {
    try {
      const candies = await this.candyRepository.find();

      return candies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOneCandy(id: number): Promise<candyRepositoryModel> {
    const params: FindOneOptions<candyRepositoryModel> = {
      where: { idCandy: id },
    };

    const candy = await this.candyRepository.findOne(params);

    if (!candy) {
      throw new NotFoundException('Candy not found');
    }
    return candy;
  }

  async updateCandy(
    id: number,
    updateCandyDto: candyRepositoryModel,
  ): Promise<candyRepositoryModel> {
    const oldCandies = await this.candyRepository.findOneBy({
      idCandy: id,
    });
    const updatedCandy = Object.assign(oldCandies, updateCandyDto);
    return await this.candyRepository.save(updatedCandy);
  }

  async removeCandy(id: number): Promise<candyRepositoryModel> {
    const deleteCandy = await this.candyRepository.findOneBy({
      idCandy: id,
    });
    await this.candyRepository.delete(deleteCandy);
    return deleteCandy;
  }
}
