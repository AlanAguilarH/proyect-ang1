import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  listProducts: Product [] =
  [
    {id: 1, name: 'Night Knight', description: 'Empresa de Nintendo', ratingage: 'B o 12 años', console: 'Switch NT', 
    price: 250, stock: 45}, 
    {id: 2, name: 'GTA2 & HaShaDo: Delta 6',     description: 'Empresa de RockStar and Vblank', 
    ratingage: 'C o 18 años', console: 'Switch NT, PlaySt V, PC (Win)', price: 460, stock: 123},  
    {id: 3, name: 'New Nundo Gorvement', 
    description: 'Empresa de Winwarcarf', ratingage: 'B o 12 años', console: 'PC (Win,Steam,Linux,Mac)', 
    price: 510, stock: 63},
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
