import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CategoryService } from './shared/services/category.service';
import { httpInterceptorsProviders } from './shared/interceptors';
import { ProductModule } from './modules/product/product.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    ProductModule,
  ],
  providers: [
    CategoryService,
    httpInterceptorsProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
