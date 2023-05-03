import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


@Entity('succes')
export class Succes extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number

    @Column()
    timeTakenMs: number

    @CreateDateColumn()
    created_at: Date

}





