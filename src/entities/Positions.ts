import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './Users';

@Entity('positions', { schema: 'barberplan' })
export class Positions {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_positions' })
  idPositions: number;

  @ApiProperty()
  @Column('varchar', { name: 'type', length: 55 })
  type: string;

  @OneToMany(() => Users, (users) => users.idPosition2)
  users: Users[];
}

