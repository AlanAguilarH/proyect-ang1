import { Component, OnInit } from '@angular/core';
import { PaqueteServicie, Paquete} from '../../paquete/paquete.server';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  paquetes:Paquete[] = [];

  datos= [
    {titulo:"Servidor de hierro",subtitulo:"Guarda archivos de 15 GB al Maximo y descarga al 10 archivos de 2 GB.",imagen:"assets/imagen/iron_server.png",costos:[
      {tipo:"Basico",mes:"A un mes $100 MXN",semestre:"A un semestre $550 MXN",anio:"A un año $1000 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
    {titulo:"Servidor de acero",subtitulo:"Guarda archivos de 32 GB al Maximo y descarga al 15 archivos de 4 GB.",imagen:"assets/imagen/steel_server.png",costos:[
      {tipo:"Super Basico",mes:"A un mes $200 MXN",semestre:"A un semestre $1100 MXN",anio:"A un año $2000 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
    {titulo:"Servidor de cobre",subtitulo:"Guarda archivos de 48 GB al Maximo y descarga al 22 archivos de 6 GB.",imagen:"assets/imagen/copper_server.png",costos:[
      {tipo:"Intermedio",mes:"A un mes $320 MXN",semestre:"A un semestre $190 MXN",anio:"A un año $3200 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
    {titulo:"Servidor de plata",subtitulo:"Guarda archivos de 64 GB al Maximo y descarga al 28 archivos de 8 GB.",imagen:"assets/imagen/silver_server.png",costos:[
      {tipo:"Uber-Intermedio",mes:"A un mes $430 MXN",semestre:"A un semestre $2400 MXN",anio:"A un año $4300 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
    {titulo:"Servidor de oro",subtitulo:"Guarda archivos de 96 GB al Maximo y descarga al 36 archivos de 12 GB.",imagen:"assets/imagen/gold_server.png",costos:[
      {tipo:"Premiun",mes:"A un mes $500 MXN",semestre:"A un semestre $2800 MXN",anio:"A un año $5000 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
    {titulo:"Servidor de platino",subtitulo:"Guarda archivos de 128 GB al Maximo y descarga al 50 archivos de 16 GB.",imagen:"assets/imagen/platinum_server.png",costos:[
      {tipo:"Premium Total Maximum (PTM)",mes:"A un mes $650 MXN",semestre:"A un semestre $3400 MXN",anio:"A un año $6500 MXN"}],links:[{mes:"por mes",semestre:"por semestre",anio:"por año"}]},
  ]

  constructor(private router: Router, 
    private _paqueteServicie:PaqueteServicie) {
   }
  
    ngOnInit() {
      this.paquetes = this._paqueteServicie.getPaquete();
      console.log( this.paquetes);
    }
  
  
    verPaquete(idx:number){
    console.log(idx);
    this.router.navigate(['/detalle',idx]);
   }

  }