import { Companhia } from 'src/companhias/entities/companhia.entity';
import { Estado } from 'src/estados/entities/estado.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type TipoPassagem = 'Executiva' | 'Econômica';

@Entity()
export class Passagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: TipoPassagem;

  @Column()
  precoIda: number;

  @Column()
  precoVolta: number;

  @Column()
  taxaEmbarque: number;

  @Column()
  conexoes: number;

  @Column()
  tempoVoo: number;

  @ManyToOne(() => Estado)
  @JoinColumn()
  origem: Estado;

  @ManyToOne(() => Estado)
  @JoinColumn()
  destino: Estado;

  @ManyToOne(() => Companhia)
  @JoinColumn()
  companhia: Companhia;
}
