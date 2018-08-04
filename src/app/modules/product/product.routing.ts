import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./component/list/product-list.component";

const PRODUCT_ROUTES: Routes = [
    { path: 'product/list', component: ProductListComponent },
];

export const ProductRouting = RouterModule.forChild(PRODUCT_ROUTES);