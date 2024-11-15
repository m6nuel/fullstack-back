import { IsString } from 'class-validator';

export class CreateSubtemaDto {
  @IsString()
  subtema: string;
}
