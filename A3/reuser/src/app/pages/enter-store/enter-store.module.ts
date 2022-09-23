import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterStorePageRoutingModule } from './enter-store-routing.module';

import { EnterStorePage } from './enter-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterStorePageRoutingModule
  ],
  declarations: [EnterStorePage]
})
export class EnterStorePageModule {}
