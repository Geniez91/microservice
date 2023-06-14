import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import CandyModel from './candies-model';
import CandyModelService from 'src/services/candies/candies-models-services';
import { CandyService } from 'src/services/candies/candies-service';

@Controller('candies')
export class CandiesController {
  constructor(private readonly candyService: CandyService) {} // Injectez le service approprié ici

  @Post()
  async create(@Body() body) {
    const candies: CandyModel = {
      name: body.name,
      type: body.type,
      weight: body.weight,
      price: body.price,
    };

    const candiesForService: CandyModelService = {
      name: candies.name,
      type: candies.type,
      weight: candies.weight,
      price: candies.price,
    };

    try {
      await this.candyService.searchForCandies(candiesForService); // Appel de la méthode du service
      console.log('test');
    } catch (error) {
      console.log(error); // Transmettre l'erreur à l'erreur middleware
    }
  }

  @Get()
  async findAll(): Promise<CandyModel[]> {
    return this.candyService.findAllCandies();
  }
}
