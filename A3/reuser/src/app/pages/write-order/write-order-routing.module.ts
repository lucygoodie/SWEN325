import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteOrderPage } from './write-order.page';

const routes: Routes = [
  {
    path: '',
    component: WriteOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteOrderPageRoutingModule {}
