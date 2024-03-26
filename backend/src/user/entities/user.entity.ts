import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Server} from "../../server/entities/server.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(type => Server, server => server.user)
    servers: Server[];

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}