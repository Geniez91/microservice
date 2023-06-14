import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candies {
  @PrimaryGeneratedColumn()
  idCandy: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  weight: string;

  @Column()
  price: number;
}
