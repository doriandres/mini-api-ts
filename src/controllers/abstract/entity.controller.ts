import { Post, Get, Param, Body } from '@nestjs/common';
import { EntityService } from 'src/services/abstract/entity.service';
import { ApiResponse } from '../../dto/api.response';

export class EntityController<T> {
  constructor(protected readonly service: EntityService<T>) {}

  @Post('create')
  async create(@Body() entity: Partial<T>): Promise<ApiResponse<boolean>> {
    try {
      await this.service.create(entity as T);
      return new ApiResponse(true);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Post('update/:id')
  async update(
    @Param('id') id: number,
    @Body() entity: Partial<T>,
  ): Promise<ApiResponse<boolean>> {
    try {
      await this.service.update(id, entity);
      return new ApiResponse(true);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Get('all')
  async all(): Promise<ApiResponse<T[]>> {
    try {
      const data = await this.service.getAll();
      return new ApiResponse(data);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Get('get/:id')
  async get(@Param('id') id: number): Promise<ApiResponse<T>> {
    try {
      const data = await this.service.getById(id);
      return new ApiResponse(data);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }

  @Post('remove/:id')
  async remove(@Param('id') id: number): Promise<ApiResponse<boolean>> {
    try {
      await this.service.removeById(id);
      return new ApiResponse(true);
    } catch (err) {
      return new ApiResponse(null, err.message);
    }
  }
}
