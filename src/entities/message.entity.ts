import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Chat } from './chat.entity';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty({ type: String })
  datetime: Date;

  @ManyToOne(() => Chat, (chat) => chat.messages)
  @ApiProperty()
  chat: Chat;

  @ManyToOne(() => User, { eager: true })
  @ApiProperty()
  user: User;

  @Column()
  @ApiProperty()
  content: string;
}
