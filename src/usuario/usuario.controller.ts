import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsuarioController {
  private usuarios = [];

  @Post()
  public cria(@Body() usuario) {
    this.usuarios.push(usuario);
    return usuario;
  }
  @Get() 
  public pegaTodos() {
    return this.usuarios;
  }
}
