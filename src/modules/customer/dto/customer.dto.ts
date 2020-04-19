import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CustomerDto {
  @ApiProperty({ description: 'The name of a customer' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Age of a customer' })
  @IsNumber()
  readonly age: number;
}
