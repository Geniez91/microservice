import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candies } from './entities/candies.entity';
import { CandyService } from './services/candies/candies-service';
import { CandiesController } from './controllers/candies/candies-controller';
import { CandiesRepository } from './repositories/candies-repository/candiesRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Candies])], // Inclure l'entité Movies
  controllers: [CandiesController],
  providers: [CandyService, CandiesRepository],
})
export class MoviesModule {}
