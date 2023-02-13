import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Message } from './message.entity';
import { User } from './user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToMany(() => User, { eager: true })
  @JoinTable()
  @ApiProperty()
  members: User[];

  @OneToMany(() => Message, (msg) => msg.chat)
  @ApiProperty()
  messages: Message[];
}
