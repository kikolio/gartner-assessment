import { Component, OnInit } from "@angular/core";
import { Product } from "../../product";
import { ProductService } from "../../product.service";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: Product[];
    displayedColumns: string[] = ['Name', 'Description'];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts()
            .subscribe(data => this.products = data);
    }
}