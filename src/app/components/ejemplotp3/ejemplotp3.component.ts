import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplotp3',
  templateUrl: './ejemplotp3.component.html',
  styleUrls: ['./ejemplotp3.component.css']
})
export class Ejemplotp3Component implements OnInit {
  title = "mouse-hover";
  showImage: boolean;

  constructor() { 
    this.showImage = false;
  }

  ngOnInit(): void {
    //Encontrar elementos de HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
const links = document.getElementsByClassName("links");


//Cambiar valores de HTML
titulo!.innerHTML = "Titulo cambiado";

document.getElementById("demo")!.innerHTML = 'The text in first paragraph (index 0) is: ' + parrafo[0].innerHTML;



//links[0].href= "google.com"; 

//Cambiar estilos

titulo!.style.color = "red"

//Eventos
/*
function cambiarTexto(obj:any) {
    obj.innerHTML = "Texto clickeado"
}

function mOver(obj:any) {
    obj.innerHTML = "Mouse over now"
}

function mOut(obj:any) {
    obj.innerHTML = "Mouse out"
}

function mDown(obj:any) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj:any) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}*/


//addEventListener

const boton = document.getElementById("boton");
boton!.addEventListener("click", alerta)

function alerta() {
    alert("alerta");
}
  }

}
