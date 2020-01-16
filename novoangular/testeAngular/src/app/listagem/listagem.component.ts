import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../servicos/usuario.service';
import {Usuario} from '../model/Usuario';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  public listaUser:Usuario[];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.service.recuperaTodos().subscribe((res:Usuario[])=>{
     this.listaUser = res;
    });
  }

}
