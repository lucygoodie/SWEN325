import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'enter-store',
    loadChildren: () => import('./pages/enter-store/enter-store.module').then( m => m.EnterStorePageModule)
  },
  {
    path: 'store/:id',
    loadChildren: () => import('./pages/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'item/:id',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'write-order',
    loadChildren: () => import('./pages/write-order/write-order.module').then( m => m.WriteOrderPageModule)
  },
  {
    path: 'read-order',
    loadChildren: () => import('./pages/read-order/read-order.module').then( m => m.ReadOrderPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'unsuccessful-scan',
    loadChildren: () => import('./pages/unsuccessful-scan/unsuccessful-scan.module').then( m => m.UnsuccessfulScanPageModule)
  },
  // {
  //   path: 'db',
  //   loadChildren: () => import('./services/db/db.module').then( m => m.DbPageModule)
  // },
  // {
  //   path: 'nfc',
  //   loadChildren: () => import('./services/nfc/nfc.module').then( m => m.NfcPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
