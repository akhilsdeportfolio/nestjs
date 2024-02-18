import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
 @PrimaryGeneratedColumn()
 actor_id: string;

 @Column()
 first_name: string;

 @Column()
 last_name: string;

 @Column({ default: new Date() })
 last_update: Date;
}
