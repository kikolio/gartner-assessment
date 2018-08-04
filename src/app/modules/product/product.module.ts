import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material';
import { ProductService } from "./product.service";
import { ProductListComponent } from "./component/list/product-list.component";
import { CommonModule } from "../../../../node_modules/@angular/common";
import { ProductRouting } from "./product.routing";

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        ProductRouting,
    ],
    exports: [
        ProductListComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule { }