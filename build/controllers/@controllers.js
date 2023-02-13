"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const chat_controller_1 = require("./chat.controller");
const message_controller_1 = require("./message.controller");
const user_controller_1 = require("./user.controller");
exports.controllers = [
    user_controller_1.UsersController,
    chat_controller_1.ChatsController,
    message_controller_1.MessagesController
];
//# sourceMappingURL=@controllers.js.map