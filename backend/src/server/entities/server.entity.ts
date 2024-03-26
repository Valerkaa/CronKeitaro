import {Column, OneToMany, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {User} from "../../user/entities/user.entity";

export class Server {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    password: string;

    @Column({unique: true})
    ip: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(type => User, user => user.id)
    user: User;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}
