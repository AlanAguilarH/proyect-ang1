import { Component, OnInit } from '@angular/core';
import { PaqueteServicie } from '../../paquete/paquete.server';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  paquetes:any = [];
  paquetesall:any = [];

  constructor( private _paqueteServicie:PaqueteServicie,
    private activatedRoute:ActivatedRoute)
   { 
   this.activatedRoute.params.subscribe(params => { 

    const paquetetemp = this._paqueteServicie.getDetalle(params['id']);
    this.paquetes.push(paquetetemp); 
    console.log(this.paquetes); 
  });
    //console.log("constructor");
  }

  ngOnInit() {
    this.paquetesall = this._paqueteServicie.getPaquete();
    console.log( this.paquetes);
    
  }

  //verPaquete( idx:number){
    //this.activatedRoute.navigate(['/',idx])
  //}

}
