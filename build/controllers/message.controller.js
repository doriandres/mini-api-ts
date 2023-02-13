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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const api_response_1 = require("../dto/api.response");
const chat_service_1 = require("../services/chat.service");
const message_service_1 = require("../services/message.service");
const user_service_1 = require("../services/user.service");
const entity_controller_1 = require("./abstract/entity.controller");
let MessagesController = class MessagesController extends entity_controller_1.EntityController {
    constructor(messageService, userService, chatsService) {
        super(messageService);
        this.messageService = messageService;
        this.userService = userService;
        this.chatsService = chatsService;
    }
    async create(entity) {
        var _a, _b;
        try {
            if (!((_a = entity.user) === null || _a === void 0 ? void 0 : _a.id)) {
                return new api_response_1.ApiResponse(null, `Must define a user`);
            }
            if (!((_b = entity.chat) === null || _b === void 0 ? void 0 : _b.id)) {
                return new api_response_1.ApiResponse(null, `Must define a chat`);
            }
            const user = await this.userService.getById(entity.user.id);
            if (!user) {
                return new api_response_1.ApiResponse(null, `User with id ${entity.user.id} does not exist`);
            }
            entity.user = user;
            const chat = await this.chatsService.getById(entity.chat.id);
            if (!chat) {
                return new api_response_1.ApiResponse(null, `Chat with id ${entity.chat.id} does not exist`);
            }
            entity.chat = chat;
            entity.datetime = new Date();
            super.create(entity);
        }
        catch (err) {
            return new api_response_1.ApiResponse(null, err.message);
        }
    }
    async getByUser(chatId) {
        try {
            const data = await this.messageService.getByChat(chatId);
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
], MessagesController.prototype, "create", null);
__decorate([
    (0, common_2.Get)('chat/:chatId'),
    __param(0, (0, common_2.Param)('chatId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getByUser", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [message_service_1.MessagesService,
        user_service_1.UsersService,
        chat_service_1.ChatsService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=message.controller.js.map