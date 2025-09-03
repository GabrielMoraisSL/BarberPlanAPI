import { ApiProperty } from '@nestjs/swagger';

export class GetAllUsersDTO {
  @ApiProperty()
  idUsers: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  createDate: string;

  @ApiProperty()
  idPosition: number;

  @ApiProperty()
  idBarbershop: number;
}

export class CreateUsersDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  idPosition: number;

  @ApiProperty()
  idBarbershop: number;
}

export class DeleteUsersDTO {
  @ApiProperty()
  idUsers: number;
}

export class PatchUsersDTO {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  cpf?: string;

  @ApiProperty()
  idPosition?: number;

  @ApiProperty()
  idBarbershop?: number;
}

export class FindOneUsersDTO {
  @ApiProperty()
  idUsers: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  idPosition: number;

  @ApiProperty()
  idBarbershop: number;

  @ApiProperty()
  createDate: string;
}
