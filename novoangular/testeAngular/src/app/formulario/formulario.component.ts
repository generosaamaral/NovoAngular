import { Component, OnInit } from '@angular/core';
import {Usuario} from '../model/Usuario';
import {UsuarioService} from '../servicos/usuario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  public usuario:Usuario = new Usuario();

  constructor(private service: UsuarioService) { }

  ngOnInit() {
  }
EnviarDados(){
 
  this.service.insere(this.usuario).subscribe(
    res=>{
      console.log(res);
      console.log("Inserido com sucesso");
    },
    error=>{
      console.log(error);
      console.log("Erro ao inserir");
    }
  )
}
}
