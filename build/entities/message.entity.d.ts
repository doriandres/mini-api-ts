import { Chat } from './chat.entity';
import { User } from './user.entity';
export declare class Message {
    id: number;
    datetime: Date;
    chat: Chat;
    user: User;
}
