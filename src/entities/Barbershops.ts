import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './Users';
import { ApiProperty } from '@nestjs/swagger';

@Entity('barbershops', { schema: 'barberplan' })
export class Barbershops {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_barbershops' })
  idBarbershops: number;

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ApiProperty()
  @Column('varchar', { name: 'cnpj', length: 45 })
  cnpj: string;

  @ApiProperty()
  @Column('date', { name: 'create_date', default: () => "'curdate()'" })
  createDate: string;

  @OneToMany(() => Users, (users) => users.idBarbershop)
  users: Users[];
}

