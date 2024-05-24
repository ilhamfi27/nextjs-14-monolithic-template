import { IsString } from 'class-validator';

export class InternalAuthRequest {
  @IsString()
  username!: string;

  @IsString()
  password!: string;
}
