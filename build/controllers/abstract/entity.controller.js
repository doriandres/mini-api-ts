"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityController = void 0;
const common_1 = require("@nestjs/common");
const api_response_1 = require("../../dto/api.response");
class EntityController {
    constructor(service) {
        this.service = service;
    }
    async create(entity) {
        try {
            await this.service.create(entity);
            return new api_response_1.ApiResponse(true);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async update(id, entity) {
        try {
            await this.service.update(id, entity);
            return new api_response_1.ApiResponse(true);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async all() {
        try {
            const data = await this.service.getAll();
            return new api_response_1.ApiResponse(data);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async get(id) {
        try {
            const data = await this.service.getById(id);
            return new api_response_1.ApiResponse(data);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async remove(id) {
        try {
            await this.service.removeById(id);
            return new api_response_1.ApiResponse(true);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
}
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "all", null);
__decorate([
    (0, common_1.Get)('get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntityController.prototype, "remove", null);
exports.EntityController = EntityController;
//# sourceMappingURL=entity.controller.js.map