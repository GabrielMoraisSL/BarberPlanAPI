import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreatePositionsDTO,
  GetAllPositionsDTO,
  PatchPositionsDTO,
} from '../dtos/Positions';
import { PositionsService } from './services.service';

@ApiTags('positions')
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get('findAll')
  @ApiOperation({ summary: 'List all positions' })
  @ApiCreatedResponse({
    type: GetAllPositionsDTO,
  })
  async getfindAll(): Promise<GetAllPositionsDTO[]> {
    return this.positionsService.getfindAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new position' })
  @ApiCreatedResponse({
    type: CreatePositionsDTO,
  })
  async create(@Body() position: CreatePositionsDTO) {
    return this.positionsService.create(position);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a position by ID' })
  @ApiCreatedResponse({
    type: PatchPositionsDTO,
  })
  async patch(
    @Param('id') idPositions: number,
    @Body() position: PatchPositionsDTO,
  ) {
    return await this.positionsService.update(idPositions, position);
  }
}
