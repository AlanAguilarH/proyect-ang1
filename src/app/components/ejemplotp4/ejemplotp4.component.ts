import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplotp4',
  templateUrl: './ejemplotp4.component.html',
  styleUrls: ['./ejemplotp4.component.css']
})
export class Ejemplotp4Component implements OnInit {

  
  constructor() { }

  ngOnInit(): void {

 /* const fetchPokemon = () => {
      const pokeNameInput = document.getElementById("pokeName");
      let pokeName = pokeNameInput!.value;
      pokeName = pokeName.toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
      fetch(url).then((res) => {
          if (res.status != "200") {
              console.log(res);
              pokeImage("./pokemon-sad.gif")
          }
          else {
              return res.json();
          }
      }).then((data:any) => {
          if (data) {
              console.log(data);
              let pokeImg = data.sprites.front_default;
              pokeImage(pokeImg);
              console.log(pokeImg);
          }
      });
  }
  
  const pokeImage = (url:any) => {
      const pokePhoto = document.getElementById("pokeImg") as HTMLImageElement;
      pokePhoto!.src = url;
  }*/

  const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName") as HTMLInputElement;
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
            if (res.status !== 200) {
                console.log(res);
                pokeImage("./pokemon-sad.gif");
                return null; // Agregamos un return null aquí
            } else {
                return res.json();
            }
        })
        .then((data: any) => {
            if (data) {
                console.log(data);
                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);
            }
        });
};

const pokeImage = (url: string) => {
    const pokePhoto = document.getElementById("pokeImg") as HTMLImageElement;
    pokePhoto.src = url;
};

  }
}

