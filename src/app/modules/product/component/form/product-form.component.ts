import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../product.service";
import { Product } from "../../product";
import { Category } from "../../../../shared/models/category";
import { CategoryService } from "../../../../shared/services/category.service";

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    productId: number;
    product: Product;
    categories: Category[];

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) { }

    ngOnInit() {
        this.productId = this.activatedRoute.snapshot.params['id'];

        if (this.productId) {
            this.productService.getProductById(this.productId)
                .subscribe(data => this.product = data);
        } else {
            this.product = new Product();
        }

        this.categoryService.getCategories()
            .subscribe(data => this.categories = data);
    }

    saveProduct() {
        console.log('saving');
    }
}