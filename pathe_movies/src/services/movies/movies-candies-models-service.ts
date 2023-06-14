import CandyModelService from './candies-models-service';
import MovieModelService from './movies-models-services';

export default interface MoviesCandiesModelService {
  movies: MovieModelService[];
  candies: CandyModelService[];
}
