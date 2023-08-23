import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  listProducts: Product [] =[
    { name: 'Night Knight', description: 'Empresa de Nintendo', ratingage: 'B o 12 años', price: 250, stock: 45},
    { name: 'GTA2 & HaShaDo: Delta 6', description: 'Empresa de RockStar and Vblank', ratingage: 'C o 18 años',
     price: 460, stock: 123},
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
