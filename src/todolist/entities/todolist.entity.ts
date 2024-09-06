import { Base } from "../../entities/base.entity";
import { user } from "../../entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
@Entity()
export class Todolist extends Base{

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    userId: string;

    @ManyToOne(() => user, (user) => user.todo)
    user:user[]
}
