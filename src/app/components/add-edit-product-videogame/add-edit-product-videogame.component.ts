import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-add-edit-product-videogame',
  templateUrl: './add-edit-product-videogame.component.html',
  styleUrls: ['./add-edit-product-videogame.component.css']
})
export class AddEditProductVideogameComponent implements OnInit{
  form: FormGroup;

  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      // name: ['', Validators.required, Validators.maxLength(20)],
      description: ['', Validators.required],
      ratingage: ['', Validators.required],
      console: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  addProduct() {
    console.log('Agregar producto'); 
    /*console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.form.get('name')?.value);*/

    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      ratingage: this.form.value.ratingage,
      console: this.form.value.console,
      price: this.form.value.price,
      stock: this.form.value.stock
    }

    console.log(product);
  }
}
