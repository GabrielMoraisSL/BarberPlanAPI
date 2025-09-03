import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeServices } from './TypeServices';
import { ApiProperty } from '@nestjs/swagger';

@Entity('services', { schema: 'barberplan' })
export class Services {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_services' })
  idServices: number;

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ApiProperty()
  @Column('time', { name: 'time' })
  time: string;

  @ApiProperty()
  @Column('date', { name: 'date' })
  date: string;

  @ApiProperty()
  @Column("date", { name: "create_date", default: () => "'curdate()'" })
  createDate: string;

  @ApiProperty()
  @Column('int', { name: 'type_service_id' })
  idTypeServices: number;

  @ManyToOne(() => TypeServices, (typeServices) => typeServices.services, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'type_service_id', referencedColumnName: 'idtypeServices' },
  ])
  typeService: TypeServices;
  
}

