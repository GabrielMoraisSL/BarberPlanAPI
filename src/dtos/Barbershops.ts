import { ApiProperty } from "@nestjs/swagger";

export class GetAllBarbershopsDTO {
  @ApiProperty()
  idBarbershops: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  createDate: string;
}

export class FindOneBarbershopsDTO {
  @ApiProperty()
  idBarbershops: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  createDate: string;
}

export class PatchBarbershopsDTO {
  @ApiProperty()
  idBarbershops: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cnpj: string;

  @ApiProperty()
  createDate: string;
}

export class CreateBarberShopDTO {
  @ApiProperty()
  idBarbershops: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cnpj: string;

}

export class DeleteBarberShopDTO {
  @ApiProperty()
  idBarbershops: number;
}

