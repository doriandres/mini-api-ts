import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { controllers } from './controllers/@controllers';
import { entities } from './entities/@entities';
import { services } from './services/@services';

const isLocal = process.cwd().includes('Dorian');

const options: TypeOrmModuleOptions = isLocal
  ? {
      type: 'sqlite',
      database: 'sqlitedb.sql',
      entities: entities,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }
  : {
      type: 'postgres',
      url: process.env.DATABASE_CONNECTION_STRING,
      entities: entities,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    };

@Module({
  imports: [TypeOrmModule.forRoot(options), TypeOrmModule.forFeature(entities)],
  providers: services,
  controllers: controllers,
})
export class AppModule {}
