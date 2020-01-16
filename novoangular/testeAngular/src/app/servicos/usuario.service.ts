import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public recuperaTodos() {
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/all");

  }
  public recuperaDetalhes(id: number) {
    return this.http.get("http://cloud.professorisidro.com.br:8088/usuario/" + id);
  }
  public insere(usuario: Usuario) {
    return this.http.post("http://cloud.professorisidro.com.br:8088/usuario/new",usuario);

  }
}
