import { Component, OnInit, Inject } from "@angular/core";
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from "@angular/material";
import { Product } from "../../product";
import { ProductService } from "../../product.service";

@Component({
    templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {

    constructor(private bottomSheetRef: MatBottomSheetRef<ProductDetailComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: Product) { }
}