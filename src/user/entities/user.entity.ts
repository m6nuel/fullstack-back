// import { Tema } from 'src/tema/entities/tema.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;

  // @OneToMany(() => Tema, (tema) => tema.user)
  // temas: Tema[];
}
