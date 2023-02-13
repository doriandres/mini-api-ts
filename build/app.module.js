"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const _controllers_1 = require("./controllers/@controllers");
const _entities_1 = require("./entities/@entities");
const _services_1 = require("./services/@services");
const isLocal = process.cwd().includes('Dorian');
const options = isLocal
    ? {
        type: 'sqlite',
        database: 'sqlitedb.sql',
        entities: _entities_1.entities,
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
    }
    : {
        type: 'postgres',
        url: 'postgres://postgres:8pxTQXl2TS7hKfJ@mini-api-db.internal:5432',
        entities: _entities_1.entities,
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
    };
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(options), typeorm_1.TypeOrmModule.forFeature(_entities_1.entities)],
        providers: _services_1.services,
        controllers: _controllers_1.controllers,
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map