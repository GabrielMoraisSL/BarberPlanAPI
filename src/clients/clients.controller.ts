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
  CreateClientsDTO,
  DeleteClientsDTO,
  FindOneClientsDTO,
  GetAllClientsDTO,
  PatchClientsDTO,
} from '../dtos/Clients';
import { ClientsService } from './clients.service';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('findAll')
  @ApiOperation({ summary: 'List all clients' })
  @ApiCreatedResponse({
    type: GetAllClientsDTO,
  })
  async getfindAll(): Promise<GetAllClientsDTO[]> {
    return this.clientsService.getfindAll();
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'Get a client by ID' })
  @ApiCreatedResponse({
    type: FindOneClientsDTO,
  })
  async getfindOne(@Param('id') id: number): Promise<FindOneClientsDTO> {
    return this.clientsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new client' })
  @ApiCreatedResponse({
    type: CreateClientsDTO,
  })
  async create(@Body() client: CreateClientsDTO) {
    return this.clientsService.create(client);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a client by ID' })
  @ApiCreatedResponse({
    type: PatchClientsDTO,
  })
  async patch(@Param('id') idClients: number, @Body() client: PatchClientsDTO) {
    return await this.clientsService.update(idClients, client);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a client by ID' })
  async delete(@Param('id') idClients: DeleteClientsDTO): Promise<void> {
    return this.clientsService.delete(idClients);
  }
}
