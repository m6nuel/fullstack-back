import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubtemaDto {
  @IsNotEmpty()
  @IsString()
  subtema: string;

  @IsNotEmpty()
  @IsNumber()
  temaId: number;
}
