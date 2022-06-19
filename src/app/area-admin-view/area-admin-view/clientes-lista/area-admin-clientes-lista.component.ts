import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-area-admin-clientes-lista',
  templateUrl: './area-admin-clientes-lista.component.html',
  styleUrls: ['./area-admin-clientes-lista.component.css']
})
export class AreaAdminClientesListaComponent implements OnInit {

  @Output() cambiarApartadoEvent = new EventEmitter<string>();
  // Datos de prueba. Substituir por datos recibidos por la base de datos
  listaClientes: Cliente[] = [
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
    {id:0, nombre:"pepe", apellido: "pepito", dni: "123", email: "asd" },
  ];
  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApartado(apartado: string) {
    this.cambiarApartadoEvent.emit(apartado)
  }

}
