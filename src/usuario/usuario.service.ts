import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [{
    id: 1,
    nomeDeUsuario: "Antony",
    email: "againplayi7@gmail.com",
    senha: "centromaisfreedomundo28/03/2007",
    nomeCompleto: "Antony Maziero Warken",
    dataDeEntrada: new Date()
  }
  ];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find((usuario) => usuario.nomeDeUsuario === nomeDeUsuario)  
  }

}