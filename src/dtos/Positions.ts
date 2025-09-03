import { ApiProperty } from "@nestjs/swagger";

export class GetAllPositionsDTO {
  @ApiProperty()
  idPositions: number;

  @ApiProperty()
  type: string;
}

export class PatchPositionsDTO {
  @ApiProperty()
  type?: string;
}

export class CreatePositionsDTO {
  @ApiProperty()
  type: string;
}

