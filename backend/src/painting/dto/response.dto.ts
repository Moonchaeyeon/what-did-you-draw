import { IsNumber, IsString } from 'class-validator';

export class PaintingResponseDto {
    @IsNumber()
    id: number;

    @IsString()
    userId: number;

    @IsString()
    image: string;

    @IsString()
    createdAt: string;
}