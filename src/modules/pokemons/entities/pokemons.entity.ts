import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pokemons')
export class Pokemons {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column('varchar')
  tipo: string;

  @ApiProperty()
  @Column('varchar')
  treinador: string;

  @ApiPropertyOptional()
  @Column('int', { default: 1 })
  nivel: number;
}
