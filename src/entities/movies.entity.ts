import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  idMovies: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  duration: number;

  @Column()
  synopsis: string;

  @Column()
  nationality: string;

  @Column()
  realease_date: Date;
}
