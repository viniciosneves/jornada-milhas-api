import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Promocao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  destino: string;
  @Column({ nullable: true })
  imagem: string;
  @Column()
  preco: number;
}
