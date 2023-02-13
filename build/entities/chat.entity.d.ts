import { Message } from './message.entity';
import { User } from './user.entity';
export declare class Chat {
    id: number;
    members: User[];
    messages: Message[];
}
