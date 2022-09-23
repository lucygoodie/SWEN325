import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterStorePage } from './enter-store.page';

const routes: Routes = [
  {
    path: '',
    component: EnterStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterStorePageRoutingModule {}
