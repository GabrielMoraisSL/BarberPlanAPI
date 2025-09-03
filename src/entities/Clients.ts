import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients', { schema: 'barberplan' })
export class Clients {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_clients' })
  idClients: number;

  @ApiProperty()
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ApiProperty()
  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @ApiProperty()
  @Column('varchar', { name: 'cpf', length: 45 })
  cpf: string;

  @ApiProperty()
  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @ApiProperty()
  @Column("date", { name: "create_date", default: () => "'curdate()'" })
  createDate: string;
}

