import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadOrderPage } from './read-order.page';

const routes: Routes = [
  {
    path: '',
    component: ReadOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadOrderPageRoutingModule {}
