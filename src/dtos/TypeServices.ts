import { ApiProperty } from '@nestjs/swagger';
import { Services } from '../entities';

export class GetAllTypeServicesDTO {
  @ApiProperty()
  idtypeServices: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  services: Services[];
}

