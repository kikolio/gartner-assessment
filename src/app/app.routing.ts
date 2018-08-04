import { Routes, RouterModule } from "@angular/router";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'product/list', pathMatch: 'full' },
    { path: '**', redirectTo: 'product/list', pathMatch: 'full' },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES, { useHash: true });