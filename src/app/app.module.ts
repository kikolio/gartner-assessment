import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryService } from './shared/services/category.service';
import { httpInterceptorsProviders } from './shared/interceptors';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CategoryService,
    httpInterceptorsProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
