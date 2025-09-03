import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("beneficts", { schema: "barberplan" })
export class Beneficts {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: "int", name: "id_beneficts" })
  idBeneficts: number;

  @ApiProperty()
  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @ApiProperty()
  @Column("int", { name: "status" })
  status: number;

  @ApiProperty()
  @Column("varchar", { name: "details", length: 45 })
  details: string;

  @ApiProperty()
  @Column("varchar", { name: "time", nullable: true, length: 45 })
  time: string | null;

  @ApiProperty()
  @Column("varchar", { name: "date", nullable: true, length: 45 })
  date: string | null;
}
