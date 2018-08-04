import { Component, OnInit, ViewChild } from "@angular/core";
import { Product } from "../../product";
import { ProductService } from "../../product.service";
import { MatPaginator, MatTableDataSource } from "../../../../../../node_modules/@angular/material";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    displayedColumns: string[] = ['Name', 'Description', 'Actions'];
    
    products = new MatTableDataSource<Product>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getAllProducts()
            .subscribe(data => {
                // this.products = new MatTableDataSource<Product>(data);
                this.products.data = data;
                this.products.paginator = this.paginator;
            });
    }
}