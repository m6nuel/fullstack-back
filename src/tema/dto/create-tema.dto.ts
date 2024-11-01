import { IsString } from 'class-validator';

export class CreateTemaDto {
  @IsString()
  tema: string;
}
