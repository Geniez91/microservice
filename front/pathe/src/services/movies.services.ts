import type { IMovies } from "@/interfaces/movies";
import axios from "axios";

export function getMovies(): Promise<IMovies[]> {
  return axios.get('http://localhost:3000/movies')
    .then(response => response.data.movies)
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    });
}
