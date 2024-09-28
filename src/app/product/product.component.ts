import { Component, OnInit } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Product One', price: 22.50 },
    { id: 2, name: 'Product Two', price: 15.00 },
    { id: 3, name: 'Product Four', price: 123.82 },
    { id: 4, name: 'Product Five', price: 123.75 }
  ];

  selectedProduct?: Product;
  isNew: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }


  addProduct() {
    this.selectedProduct = { id: 0, name: '', price: 0 };
    this.isNew = true;
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
    this.isNew = false;
  }

  saveProduct() {
    if (this.isNew) {
      this.selectedProduct!.id = Math.max(...this.products.map(p => p.id)) + 1;
      this.products.push(this.selectedProduct as Product);
    } else {
      const index = this.products.findIndex(p => p.id === this.selectedProduct!.id);
      this.products[index] = this.selectedProduct as Product;
    }
    this.selectedProduct = undefined;
  }


  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
  cancel() {
    this.selectedProduct = undefined;
  }

  
}
