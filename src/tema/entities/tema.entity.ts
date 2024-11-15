import { Subtema } from 'src/subtema/entities/subtema.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tema: string;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn()
  deleted: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
  user: User;

  @Column()
  userEmail: string;

  @OneToMany(() => Subtema, (subtema) => subtema.tema)
  subtema: Subtema[];
}

// @ManyToOne(() => User)
// @JoinColumn({ name: 'userEmail', referencedColumnName: 'email' })
// user: User;

// @Column()
// userEmail: string;
