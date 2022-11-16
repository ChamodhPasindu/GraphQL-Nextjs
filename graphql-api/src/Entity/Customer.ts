import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!:number;
    
    @Column()
    name!:string;

    @Column()
    address!:string;

    @Column()
    mobile!:string;

    @Column()
    email!:string;

    @Column()
    dob!:string;
}