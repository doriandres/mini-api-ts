"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(data, error) {
        this.datetime = new Date().toISOString();
        this.data = data;
        this.error = error;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api.response.js.map