import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./component/list/product-list.component";
import { ProductFormComponent } from "./component/form/product-form.component";

const PRODUCT_ROUTES: Routes = [
    { path: 'product/list', component: ProductListComponent },
    { path: 'product/add', component: ProductFormComponent },
    { path: 'product/edit/:id', component: ProductFormComponent },
];

export const ProductRouting = RouterModule.forChild(PRODUCT_ROUTES);