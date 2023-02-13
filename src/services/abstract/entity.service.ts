import { ObjectLiteral, Repository } from 'typeorm';

export class EntityService<T extends ObjectLiteral> {
  constructor(protected readonly repo: Repository<T>) {}

  async create(entity: T): Promise<void> {
    await this.repo.save(entity);
  }

  async update(id: number, entity: Partial<T>): Promise<void> {
    await this.repo.update(id, entity);
  }

  async getAll(): Promise<T[]> {
    return await this.repo.find();
  }

  async getById(id: number): Promise<T> {
    return await this.repo.findOneBy({ id: id as any });
  }

  async removeById(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
