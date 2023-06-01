import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Depoimento {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  texto: string;
  @Column()
  autor: string;
  @Column()
  avatar: string;
}
