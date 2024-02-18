import { Column, Model, Table, PrimaryKey, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table
export class Actor extends Model {
 @PrimaryKey
 @Column
 actor_id?: string;

 @Column
 first_name?: string;

 @Column
 last_name?: string;

 @Column({ defaultValue: new Date() })
 @CreatedAt
 @UpdatedAt
 last_update?: Date;
}
