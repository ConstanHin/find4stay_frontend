import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: string="";
  password: string="";
  email: string="";
  tipo: string= "Cliente"

  login(){
    console.log(this.usuario);
    console.log(this.password);
    console.log(this.email);
  }
  constructor() { }

  ngOnInit(): void {
  }

  cambioTipo(tipo: string) {
    this.tipo = tipo;
  }

}
