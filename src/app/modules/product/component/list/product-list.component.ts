import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource, MatBottomSheet } from "@angular/material";

import { Product } from "../../product";
import { ProductService } from "../../product.service";
import { ProductDetailComponent } from "../detail/product-detail.component";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    displayedColumns: string[] = ['Name', 'Description', 'Actions'];
    
    products = new MatTableDataSource<Product>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService,
        private bottomSheet: MatBottomSheet) { }

    ngOnInit() {
        this.productService.getAllProducts()
            .subscribe(data => {
                this.products.data = data;
                this.products.paginator = this.paginator;
            });
    }

    openDetailBottomSheet(product: Product): void {

        this.productService.getProductById(product.ProductId)
            .subscribe(data => {
                this.bottomSheet.open(ProductDetailComponent, {
                    data: data
                 });
            });
    }
}