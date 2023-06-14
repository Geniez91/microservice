import CandyModel from './candies-model';
import MovieModel from './movies-model';

export default interface MoviesCandies {
  movies: MovieModel[];
  candies: CandyModel[];
}
