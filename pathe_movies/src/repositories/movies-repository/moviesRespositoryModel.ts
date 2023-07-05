export interface movieRepositoryModel {
  idMovies?: number;
  title: string;
  director: string;
  duration: number;
  synopsis: string;
  nationality: string;
  realease_date: Date;
  availableTickets: number;
}

export default movieRepositoryModel;
