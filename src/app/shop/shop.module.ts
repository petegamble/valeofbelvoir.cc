import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      { path: 'items', component: ItemListComponent }
    ])
  ],
  declarations: [
    ItemListComponent
  ]
})
export class ShopModule { }
