import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './product/form-product/form-product.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './test/add/add.component';
import { ProductCardComponent } from './product/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    FormProductComponent,
    TestComponent,
    AddComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
