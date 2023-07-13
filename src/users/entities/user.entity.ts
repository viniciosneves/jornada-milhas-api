import { Estado } from 'src/estados/entities/estado.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  nascimento: Date;
  @Column()
  cpf: string;
  @Column()
  telefone: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column({ nullable: true })
  genero: string;

  @Column()
  cidade: string;
  @ManyToOne(() => Estado)
  @JoinColumn()
  estado: Estado;
}
