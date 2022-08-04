import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Usuario {
  @IsNotEmpty()
  id: number;
  @IsString()
  nomeDeUsuario: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  senha: string;
  @IsNotEmpty()
  nomeCompleto: string;
  @IsDate()
  dataDeEntrada: Date;
}
