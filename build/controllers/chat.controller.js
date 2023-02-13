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
exports.ChatsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const api_response_1 = require("../dto/api.response");
const chat_service_1 = require("../services/chat.service");
const user_service_1 = require("../services/user.service");
const entity_controller_1 = require("./abstract/entity.controller");
let ChatsController = class ChatsController extends entity_controller_1.EntityController {
    constructor(chatService, userService) {
        super(chatService);
        this.chatService = chatService;
        this.userService = userService;
    }
    async create(entity) {
        try {
            const members = [];
            for (const member of entity.members) {
                const user = await this.userService.getById(member.id);
                if (user) {
                    members.push(user);
                }
                else {
                    return new api_response_1.ApiResponse(null, `User with id ${member.id} not found`);
                }
            }
            entity.members = members;
            super.create(entity);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async getByUser(userId) {
        try {
            const data = await this.chatService.getByUser(userId);
            return new api_response_1.ApiResponse(data);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
};
__decorate([
    (0, common_2.Post)('create'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "create", null);
__decorate([
    (0, common_2.Get)('user/:userId'),
    __param(0, (0, common_2.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatsController.prototype, "getByUser", null);
ChatsController = __decorate([
    (0, common_1.Controller)('chats'),
    __metadata("design:paramtypes", [chat_service_1.ChatsService, user_service_1.UsersService])
], ChatsController);
exports.ChatsController = ChatsController;
//# sourceMappingURL=chat.controller.js.map