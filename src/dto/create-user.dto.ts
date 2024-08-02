import { IsEmail, IsNotEmpty, IsOptional, Matches, MaxLength, MinLength } from "class-validator";
import { Role } from "src/entities/enum/role.enum";

export class CreateUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(8, {message: 'sorry you must put in 8 character'})
    @MaxLength(16, {message: 'password should not be more than 16 characters'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {message: 'password must contain atleast One Uppercase, One number and One special key'})
    password: string;

    @IsOptional()
    role: Role
}