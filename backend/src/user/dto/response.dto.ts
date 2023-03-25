import { IsNumber, IsString } from 'class-validator';

export class UserResponseDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;
}