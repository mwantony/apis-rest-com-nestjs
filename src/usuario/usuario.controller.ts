import { Body, Controller, Get, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    return this.usuarioService.cria(usuario);
  }
}
