import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplotp2',
  templateUrl: './ejemplotp2.component.html',
  styleUrls: ['./ejemplotp2.component.css']
})


export class Ejemplotp2Component implements OnInit {

  constructor() {

   }

  ngOnInit(): void {

    const cuadrado = function(x: number) {
      return x * x;
  }
  let numero = 4;
  console.log(cuadrado(numero));
  
  
  const ruido = function () {
      console.log("kataplum!");
  }
  
  ruido();
  
  
  const exponencial = function (base: number, exponente: number) {
      let resultado = 1;
      for (let i = 0; i < exponente; i++){
          resultado *= base;
      }
      return resultado;
  }
  
  console.log(exponencial(4,3))
  
  
  console.log(sumar(5,65));
  function sumar(x: number, y: number) {
      return x + y;
  }
  
  
  const restar = (a: number, b: number) => {
      return a - b;
  }
  console.log(restar(40, 8));
  
  
  function saludar(quien:string) {
    console.log("Hola " + quien);
    return;
  }
  saludar("Explorer");
  console.log("Bye");
  
  
  
  //Excepciones
  function preguntaDireccion(pregunta: string) {
    let result = prompt(pregunta);
    if (result!.toLowerCase() == "izquierda") return "I";
    if (result!.toLowerCase() == "derecha") return "D";
    throw new Error("Dirección inválida: " + result);
  }
  
  function mirar() {
    if (preguntaDireccion("A que lado?") == "I") {
      return "una casa";
    } else {
      return "2 osos hambrientos";
    }
  }
  
  try {
    console.log("Mira a ", mirar());
  } catch (error) {
    console.log("Hubo un error: " + error);
  }
  
  
  
  //Asincrono
  setTimeout(() => console.log("Tick"), 500);
  
  let fifteen = Promise.resolve(15);
  fifteen.then(value => console.log(`Got ${value}`));
  
  const promesa = () =>
    new Promise((resolve, reject) =>
      setTimeout(
        () => (resolve(console.log('Todo cool')), reject(new Error('oops'))),
        2000
      )
    )
  
  async function main() {
    //   promesa()
    //     .then(() => {
    //       promesa()
    //         .then(() => console.log('hola'))
    //         .catch((err) => console.error(err))
    //     })
    //     .catch((err) => console.error(err))
  
    try {
      await promesa();
      await promesa();
      console.log('hola');
  } catch (err) {
      console.error(err);
  }


    await promesa();
    console.log('Aquí termina la primer promesa');
    await promesa();
    console.log('Aquí termina la segunda promesa');
  }
  
  main();
  
  }

}

