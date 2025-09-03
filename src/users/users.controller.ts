import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDTO, DeleteUsersDTO, FindOneUsersDTO, GetAllUsersDTO, PatchUsersDTO } from '../dtos/Users';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('findAll')
  @ApiOperation({ summary: 'List all users' })
  @ApiCreatedResponse({
    type: GetAllUsersDTO,
  })
  async getfindAll(): Promise<GetAllUsersDTO[]> {
    return this.usersService.getfindAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({
    type: CreateUsersDTO,
  })
  async create(@Body() Users: CreateUsersDTO) {
    return this.usersService.create(Users);
  }

   @Get('findOne/:id')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiCreatedResponse({
      type: FindOneUsersDTO,
    })
    async getfindOne(@Param('id') id: number): Promise<FindOneUsersDTO> {
      return this.usersService.findOne(id);
    }
  
    @Patch('update/:id')
    @ApiOperation({ summary: 'Update a user by ID' })
    @ApiCreatedResponse({
      type: PatchUsersDTO,
    })
    async patch(
      @Param('id') idUsers: number,
      @Body() user: PatchUsersDTO,
    ) {
      return await this.usersService.update(idUsers, user);
    }
  
    @Delete('delete/:id')
    @ApiOperation({ summary: 'Delete a user by ID' })
    async delete(@Param('id') idUsers: DeleteUsersDTO): Promise<void> {
      return this.usersService.delete(idUsers);
    }
}
