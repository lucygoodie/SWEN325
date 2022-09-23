import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadOrderPageRoutingModule } from './read-order-routing.module';

import { ReadOrderPage } from './read-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadOrderPageRoutingModule
  ],
  declarations: [ReadOrderPage]
})
export class ReadOrderPageModule {}
