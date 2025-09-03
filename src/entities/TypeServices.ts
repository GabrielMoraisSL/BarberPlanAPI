import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Services } from './Services';
import { ApiProperty } from '@nestjs/swagger';

@Entity('type_services', { schema: 'barberplan' })
export class TypeServices {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'idtype_services' })
  idtypeServices: number;

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ApiProperty()
  @Column('float', { name: 'price', precision: 12 })
  price: number;

  @ApiProperty()
  @Column('float', { name: 'duration_min', precision: 12 })
  durationMin: number;

  @OneToMany(() => Services, (services) => services.typeService)
  services: Services[];
}

