import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule, MatButtonModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductService } from "./product.service";
import { ProductListComponent } from "./component/list/product-list.component";
import { ProductRouting } from "./product.routing";


@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
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