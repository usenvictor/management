import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./base.entity";
import { Role } from "./enum/role.enum";
import { Todolist } from "./../todolist/entities/todolist.entity";

@Entity()
export class user extends Base{

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default:Role.user
    })
    role: Role;
 
    @OneToMany(() => Todolist, (todo) => todo.user)
    todo:Todolist

}