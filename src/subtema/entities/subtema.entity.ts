import { Tema } from 'src/tema/entities/tema.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subtema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subtema: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;

  @ManyToOne(() => Tema)
  @JoinColumn({ name: 'temaId', referencedColumnName: 'id' })
  tema: Tema;

  @Column()
  temaId: number;
}

// @ManyToOne(() => User)
// @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
// user: User;

// @Column()
// userEmail: string;
