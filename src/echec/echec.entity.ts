import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


@Entity('echec')
export class Echec extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    timeTakenMs: number

    @CreateDateColumn()
    created_at: Date

}