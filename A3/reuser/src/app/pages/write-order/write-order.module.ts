import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteOrderPageRoutingModule } from './write-order-routing.module';

import { WriteOrderPage } from './write-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteOrderPageRoutingModule
  ],
  declarations: [WriteOrderPage]
})
export class WriteOrderPageModule {}
