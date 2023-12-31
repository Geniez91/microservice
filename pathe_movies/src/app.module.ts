import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entities/movies.entity';
import { MoviesController } from './controllers/movies/movies-controller';
import { MovieService } from './services/movies/movies-service';
import { MoviesRepository } from './repositories/movies-repository/moviesRepository';
import { MoviesModule } from './movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'mariadb',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'movies',
      entities: [Movies],
      synchronize: true, // crée les tables de la db
      autoLoadEntities: true,
    }),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
