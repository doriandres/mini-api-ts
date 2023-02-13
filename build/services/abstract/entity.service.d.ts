import { ObjectLiteral, Repository } from 'typeorm';
export declare class EntityService<T extends ObjectLiteral> {
    protected readonly repo: Repository<T>;
    constructor(repo: Repository<T>);
    create(entity: T): Promise<void>;
    update(id: number, entity: Partial<T>): Promise<void>;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    removeById(id: number): Promise<void>;
}
