import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/services/user.service';
import { EntityController } from './abstract/entity.controller';
export declare class UsersController extends EntityController<User> {
    constructor(service: UsersService);
}
