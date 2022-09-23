import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnsuccessfulScanPageRoutingModule } from './unsuccessful-scan-routing.module';

import { UnsuccessfulScanPage } from './unsuccessful-scan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnsuccessfulScanPageRoutingModule
  ],
  declarations: [UnsuccessfulScanPage]
})
export class UnsuccessfulScanPageModule {}
