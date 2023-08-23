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
const clickElement = document.getElementById("click");
const mouseOverElement = document.querySelector('[data-mouseover]') as HTMLElement;
const mouseOutElement = document.querySelector('[data-mouseout]') as HTMLElement;
const mouseDownElement = document.querySelector('[data-mousedown]') as HTMLElement;
const mouseUpElement = document.querySelector('[data-mouseup]') as HTMLElement;




//Cambiar valores de HTML
titulo!.innerHTML = "Titulo cambiado";

document.getElementById("demo")!.innerHTML = 'The text in first paragraph (index 0) is: ' + parrafo[0].innerHTML;

//links[0].href= "google.com";

if (links.length > 0) {
    const link = links[0] as HTMLAnchorElement;
    link.href = 'https://www.google.com';
}

 

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

function cambiarTexto(obj: HTMLElement) {
  obj.innerHTML = "Texto clickeado";
}

function mOver(obj: HTMLElement) {
  obj.innerHTML = "Mouse over now";
}

function mOut(obj: HTMLElement) {
  obj.innerHTML = "Mouse out";
}

function mDown(obj: HTMLElement) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj: HTMLElement) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "gracias";
}

if (clickElement) {
  clickElement.addEventListener("click", () => cambiarTexto(clickElement));
}

if (mouseOverElement) {
  mouseOverElement.addEventListener("mouseover", () => mOver(mouseOverElement));
}

if (mouseOutElement) {
  mouseOutElement.addEventListener("mouseout", () => mOut(mouseOutElement));
}


if (mouseDownElement) {
  mouseDownElement.addEventListener("mousedown", () => mDown(mouseDownElement));
}

if (mouseUpElement) {
  mouseUpElement.addEventListener("mouseup", () => mUp(mouseUpElement));
}

//addEventListener

const boton = document.getElementById("boton");
boton!.addEventListener("click", alerta)

function alerta() {
    alert("alerta");
}
  }

}
