import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Positions } from "./Positions";
import { Barbershops } from "./Barbershops";

@Entity("users", { schema: "barberplan" })
export class Users {
  @ApiProperty()    
  @PrimaryGeneratedColumn({ type: "int", name: "id_users" })
  idUsers: number;

  @ApiProperty()    
  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @ApiProperty()    
  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @ApiProperty()    
  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @ApiProperty()    
  @Column("varchar", { name: "phone", length: 45 })
  phone: string;

  @ApiProperty()    
  @Column("varchar", { name: "cpf", length: 45 })
  cpf: string;

  @ApiProperty()
  @Column("date", { name: "create_date", default: () => "'curdate()'" })
  createDate: string;

    @Column("int", { name: "id_position" })
  idPosition: number;

  @Column("int", { name: "id_barbershop" })
  idBarbershop: number;

  @ManyToOne(() => Positions, (positions) => positions.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_position", referencedColumnName: "idPositions" }])
  idPosition2: Positions;

  @ManyToOne(() => Barbershops, (barbershops) => barbershops.users, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "id_barbershop", referencedColumnName: "idBarbershops" },
  ])
  idBarbershop2: Barbershops;
}
