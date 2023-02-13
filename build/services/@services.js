"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const chat_service_1 = require("./chat.service");
const message_service_1 = require("./message.service");
const user_service_1 = require("./user.service");
exports.services = [
    user_service_1.UsersService,
    chat_service_1.ChatsService,
    message_service_1.MessagesService
];
//# sourceMappingURL=@services.js.map