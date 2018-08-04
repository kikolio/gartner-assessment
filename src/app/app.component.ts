import { Component, OnInit } from '@angular/core';
import { ProductService } from './modules/product/product.service';
import { Product } from './modules/product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-assessment';
  products: Product[]

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }
}
