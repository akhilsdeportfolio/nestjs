import { User } from "apps/nest-app/src/entities/user/user.entity";
import { EntitySchema } from "typeorm";

export const UserSchema = new EntitySchema<User>({
    name: "Actor",
    target: User,
    columns: {
        actor_id: {
            type: Number,
            primary: true,
            generated: true,
        },
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        last_update: {
            type: Boolean,
            default: true,
        },
    },
});
