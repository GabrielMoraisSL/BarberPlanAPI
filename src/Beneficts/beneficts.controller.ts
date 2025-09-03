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
  CreateBenefictsDTO,
  DeleteBenefictsDTO,
  FindOneBenefictsDTO,
  GetAllBenefictsDTO,
  PatchBenefictsDTO,
} from 'src/dtos/Beneficts';
import { BenefictsService } from './beneficts.service';

@ApiTags('beneficts')
@Controller('beneficts')
export class BenefictsController {
  constructor(private readonly benefictsService: BenefictsService) {}

  @Get('findAll')
  @ApiOperation({ summary: 'List all beneficts' })
  @ApiCreatedResponse({
    type: GetAllBenefictsDTO,
  })
  async getfindAll(): Promise<GetAllBenefictsDTO[]> {
    return this.benefictsService.getfindAll();
  }

  @Get('findOne/:id')
  @ApiOperation({ summary: 'Get a benefict by ID' })
  @ApiCreatedResponse({
    type: FindOneBenefictsDTO,
  })
  async getfindOne(@Param('id') id: number): Promise<FindOneBenefictsDTO> {
    return this.benefictsService.findOne(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new benefict' })
  @ApiCreatedResponse({
    type: CreateBenefictsDTO,
  })
  async create(@Body() benefict: CreateBenefictsDTO) {
    return this.benefictsService.create(benefict);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a benefict by ID' })
  @ApiCreatedResponse({
    type: PatchBenefictsDTO,
  })
  async patch(
    @Param('id') idBenefict: number,
    @Body() benefict: PatchBenefictsDTO,
  ) {
    return await this.benefictsService.update(idBenefict, benefict);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a benefict by ID' })
  async delete(@Param('id') idBenefict: DeleteBenefictsDTO): Promise<void> {
    return this.benefictsService.delete(idBenefict.idBeneficts);
  }
}
