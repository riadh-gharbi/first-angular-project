import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnRoutingModule } from './ann-routing.module';
import { AnnComponent } from './ann.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnnComponent,
    AddComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    AnnRoutingModule,
    FormsModule
  ]
})
export class AnnModule { }
