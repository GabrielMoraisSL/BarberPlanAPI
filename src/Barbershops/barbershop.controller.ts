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
  CreateBarberShopDTO,
  DeleteBarberShopDTO,
  FindOneBarbershopsDTO,
  GetAllBarbershopsDTO,
  PatchBarbershopsDTO,
} from '../dtos/Barbershops';
import { BarbershopsService } from './barbershop.service';

@ApiTags('barbershop')
@Controller('barbershop')
export class BarbershopController {
  constructor(private readonly barbershopService: BarbershopsService) { }

  @Get('findAll')
  @ApiOperation({ summary: 'List all barbershops' })
  @ApiCreatedResponse({
    type: GetAllBarbershopsDTO,
  })
  async getfindAll(): Promise<GetAllBarbershopsDTO[]> {
    return this.barbershopService.getfindAll();
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'Get a barbershop by ID' })
  @ApiCreatedResponse({
    type: FindOneBarbershopsDTO,
  })
  async getfindOne(@Param('id') id: number): Promise<FindOneBarbershopsDTO> {
    return this.barbershopService.findOne(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new barbershop' })
  @ApiCreatedResponse({
    type: CreateBarberShopDTO,
  })
  async create(@Body() barbershop: CreateBarberShopDTO) {
    return this.barbershopService.create(barbershop);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a barbershop by ID' })
  @ApiCreatedResponse({
    type: PatchBarbershopsDTO,
  })
  async patch(
    @Param('id') idBarbershop: number,
    @Body() barbershop: PatchBarbershopsDTO,
  ) {
    return await this.barbershopService.update(idBarbershop, barbershop);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a barbershop by ID' })
  async delete(@Param('id') idBarbershop: DeleteBarberShopDTO): Promise<void> {
    return this.barbershopService.delete(idBarbershop.idBarbershops);
  }
}
