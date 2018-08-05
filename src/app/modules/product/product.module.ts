import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule, MatButtonModule, MatPaginatorModule, MatIconModule, MatInputModule, MatSelectModule, MatBottomSheetModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductService } from "./product.service";
import { ProductListComponent } from "./component/list/product-list.component";
import { ProductRouting } from "./product.routing";
import { ProductFormComponent } from "./component/form/product-form.component";
import { ProductDetailComponent } from "./component/detail/product-detail.component";


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductFormComponent,
        ProductListComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        ProductRouting,
        ReactiveFormsModule,
    ],
    exports: [
        ProductListComponent
    ],
    providers: [
        ProductService
    ],
    entryComponents: [ProductDetailComponent]
})
export class ProductModule { }