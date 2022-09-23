import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsuccessfulScanPage } from './unsuccessful-scan.page';

const routes: Routes = [
  {
    path: '',
    component: UnsuccessfulScanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnsuccessfulScanPageRoutingModule {}
