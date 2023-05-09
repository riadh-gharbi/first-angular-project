import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './product/form-product/form-product.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './test/add/add.component';
import { AnnModule } from './ann/ann.module';
import { AnnRoutingModule } from './ann/ann-routing.module';




const routes : Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProductComponent },
  { path : 'product', component: FormProductComponent },
  { path: 'test', component:TestComponent ,children: [
    {path: 'add', component: AddComponent}
  ]},

  { path : '**', component: NotFoundComponent},
  //{ path: 'ann', loadChildren: () => import('./ann/ann.module').then(m => m.AnnModule) },
  

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AnnModule,
    AnnRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
