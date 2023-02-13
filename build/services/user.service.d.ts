import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { EntityService } from './abstract/entity.service';
export declare class UsersService extends EntityService<User> {
    constructor(repo: Repository<User>);
}
