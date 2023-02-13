import { EntityService } from 'src/services/abstract/entity.service';
import { ApiResponse } from '../../dto/api.response';
export declare class EntityController<T> {
    protected readonly service: EntityService<T>;
    constructor(service: EntityService<T>);
    create(entity: Partial<T>): Promise<ApiResponse<boolean>>;
    update(id: number, entity: Partial<T>): Promise<ApiResponse<boolean>>;
    all(): Promise<ApiResponse<T[]>>;
    get(id: number): Promise<ApiResponse<T>>;
    remove(id: number): Promise<ApiResponse<boolean>>;
}
