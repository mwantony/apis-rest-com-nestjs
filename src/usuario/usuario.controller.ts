import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}
  
  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
    return this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)
  }
  
  @Post()
  public cria(@Body() usuario: Usuario, @Res() res) {
    const usuarioCriado = this.usuarioService.cria(usuario);
    res.status(HttpStatus.CREATED)
      .location(`/users/${usuarioCriado.nomeDeUsuario}`)
      .json(usuario)
  }
}
