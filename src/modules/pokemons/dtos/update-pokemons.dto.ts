import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PokemonsUpdateRequest {
  @ApiProperty({ example: 'Ash' })
  @IsString()
  treinador: string;
}
