import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateServicesDTO,
  DeleteServicesDTO,
  FindOneServicesDTO,
  GetAllServicesDTO,
  PatchServicesDTO,
} from 'src/dtos/Services';
import { ServicesService } from './services.service';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('findAll')
  @ApiOperation({ summary: 'List all services' })
  @ApiCreatedResponse({
    type: GetAllServicesDTO,
  })
  async getfindAll(): Promise<GetAllServicesDTO[]> {
    return this.servicesService.getfindAll();
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'Get a service by ID' })
  @ApiCreatedResponse({
    type: FindOneServicesDTO,
  })
  async getfindOne(@Param('id') id: number): Promise<FindOneServicesDTO> {
    return this.servicesService.findOne(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new service' })
  @ApiCreatedResponse({
    type: CreateServicesDTO,
  })
  async create(@Body() service: CreateServicesDTO) {
    return this.servicesService.create(service);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a service by ID' })
  @ApiCreatedResponse({
    type: PatchServicesDTO,
  })
  async patch(
    @Param('id') idServices: number,
    @Body() service: PatchServicesDTO,
  ) {
    return await this.servicesService.update(idServices, service);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a service by ID' })
  async delete(@Param('id') idServices: DeleteServicesDTO): Promise<void> {
    return this.servicesService.delete(idServices);
  }
}
