import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarUsuariosService(): Observable<any> {
    return this.http.get("http://localhost:8086/usuario");
  }

  public criarUsuarioService(usuario:Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8086/usuario",usuario);
  }

  public buscarPorId(id: String): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:8086/usuario/"+id);
  }
  public buscarPorSenha(senha: String): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:8086/usuario/senha/"+senha);
  }

  public deleteUsuarioService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8086/usuario/"+id);
  }

  public updateUsuarioService(usuario: Usuario) {
    const url = "http://localhost:8086/usuario/";
    return this.http.put(url + usuario.id, usuario);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
