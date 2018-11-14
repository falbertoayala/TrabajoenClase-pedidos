import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/model/pedido';
import { PedidoMocks } from '../shared/pedido-mocks';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedido : Array<Pedido>;
  pedidoseleccionado : Pedido;
  platos : string[];

  constructor() { }

  ngOnInit() {
    this.pedido = PedidoMocks;
    this.platos = ["Sopa de Caracol", "Carne Asada","Camarones"]
  }

  onClick(pedido : Pedido):void{
    this.pedidoseleccionado = pedido;
  }


}
