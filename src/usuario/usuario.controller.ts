import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  public cria(@Body() usuario: Usuario): Usuario {
    return this.usuarioService.cria(usuario);
  }
}
