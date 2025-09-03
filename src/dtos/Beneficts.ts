import { ApiProperty } from '@nestjs/swagger';

export class CreateBenefictsDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  details: string;

  @ApiProperty()
  time: string | null;

  @ApiProperty()
  date: string | null;
}

export class PatchBenefictsDTO {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  status?: number;

  @ApiProperty()
  details?: string;

  @ApiProperty()
  time?: string | null;

  @ApiProperty()
  date?: string | null;
}

export class DeleteBenefictsDTO {
  @ApiProperty()
  idBeneficts: number;
}

export class FindOneBenefictsDTO {
  @ApiProperty()
  idBeneficts: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  details: string;

  @ApiProperty()
  time: string | null;

  @ApiProperty()
  date: string | null;
}

export class GetAllBenefictsDTO {
  @ApiProperty()
  idBeneficts: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: number;

  @ApiProperty()
  details: string;

  @ApiProperty()
  time: string | null;

  @ApiProperty()
  date: string | null;
}

