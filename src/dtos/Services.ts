import { ApiProperty, PartialType } from '@nestjs/swagger';

export class GetAllServicesDTO {
  @ApiProperty()
  idServices: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  idTypeServices: number;
}

export class CreateServicesDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  idTypeServices: number;
}

export class PatchServicesDTO extends PartialType(CreateServicesDTO) {}

export class FindOneServicesDTO {

  @ApiProperty()
  idServices: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  idTypeServices: number;
}


export class DeleteServicesDTO {
  @ApiProperty()
  idServices: number;
}