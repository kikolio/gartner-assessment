import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
    product: Product = new Product();
    productForm: FormGroup;
    categories: Category[];

    constructor(private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private categoryService: CategoryService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.formBuild();
        this.productId = this.activatedRoute.snapshot.params['id'];

        if (this.productId) {
            this.productService.getProductById(this.productId)
                .subscribe(data => {
                    this.product = data;
                    this.populateForm();

                });
        }

        this.categoryService.getCategories()
            .subscribe(data => this.categories = data);
    }

    formBuild() {
        this.productForm = this.formBuilder.group({
            Name: ['', Validators.required],
            Description: [''],
            Url: [''],
            Categories: ['']
        });
    }

    populateForm() {
        this.productForm.controls.Name.setValue(this.product.Name);
        this.productForm.controls.Description.setValue(this.product.Description);
        this.productForm.controls.Url.setValue(this.product.Url);
        this.productForm.controls.Categories.setValue(this.product.Categories);
    }

    validateProduct() {
        if(!this.productForm.valid)
            return;

        const product = this.getValuesFromForm();

        if (this.productId) {
            this.productService.updateProduct(product)
                .subscribe( () => this.router.navigate(['/product/list']) );
        } else {
            this.productService.addNewProduct(product)
            .subscribe(() => this.router.navigate(['/product/list']) );
        }
    }

    compareCategories(a: Category, b: Category) {
        if(b!= null)   
            return a.CategoryId == b.CategoryId;

        return false;
    }

    getIdsFromSelectedCategories() {
        const ids: number[] = Array<number>();

        this.productForm.value.Categories.forEach(c => {
            ids.push(c.CategoryId);
        });

        return ids;
    }

    getValuesFromForm() {
        const product = this.productForm.value as Product;
        product.ProductId = this.productId;
        product.CategoryIds = this.getIdsFromSelectedCategories();

        return product;
    }
}