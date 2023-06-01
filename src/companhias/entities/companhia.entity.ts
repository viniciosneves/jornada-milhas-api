import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Companhia {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nome: string;
}
