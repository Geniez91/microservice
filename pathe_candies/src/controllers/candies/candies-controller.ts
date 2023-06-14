import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
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
      await this.candyService.searchForCandies(candiesForService);
      return candiesForService;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll(): Promise<CandyModel[]> {
    return this.candyService.findAllCandies();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CandyModel> {
    return await this.candyService.findOneCandy(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandyDto: CandyModel,
  ): Promise<CandyModel> {
    const candies: CandyModel = {
      name: updateCandyDto.name,
      type: updateCandyDto.type,
      weight: updateCandyDto.weight,
      price: updateCandyDto.price,
    };

    const candiesForService: CandyModelService = {
      name: candies.name,
      type: candies.type,
      weight: candies.weight,
      price: candies.price,
    };
    return this.candyService.updateOneCandy(+id, candiesForService);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CandyModel> {
    return this.candyService.deleteOneCandy(+id);
  }
}
