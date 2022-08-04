import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  @Post()
  public cria(@Body() usuario) {
    return this.usuarioService.cria(usuario);
  }
}
