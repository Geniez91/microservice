import type { IMovies } from "@/interfaces/movies";
import axios from "axios";

export function getMovies(): Promise<IMovies[]> {
  return axios.get('http://localhost:3005/movies')
    .then(response => response.data.movies)
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    });
}
export function updateTicket(idMovies:number, number_ticket:string) {

  const ticketCount = parseInt(number_ticket, 10);
  return axios
    .patch(`http://localhost:3005/movies/${idMovies}/update-ticket`, {
      ticketCount: ticketCount
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log('Update Réussi');
    })
    .catch(error => {
      console.error('Une erreur s\'est produite :', error);
      throw error;
    });
}



