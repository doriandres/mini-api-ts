"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
class EntityService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(entity) {
        await this.repo.save(entity);
    }
    async update(id, entity) {
        await this.repo.update(id, entity);
    }
    async getAll() {
        return await this.repo.find();
    }
    async getById(id) {
        return await this.repo.findOneBy({ id: id });
    }
    async removeById(id) {
        await this.repo.delete(id);
    }
}
exports.EntityService = EntityService;
//# sourceMappingURL=entity.service.js.map