import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { ItemPage } from '../item/item.page';


@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  store_id;
  menu = [];

  constructor(
    private route: ActivatedRoute, 
    private dbService: DbService, 
    private loadingCtrl: LoadingController,  
    private router: Router, 
    public modalController: ModalController) { }

  ngOnInit() {
    this.store_id = this.route.snapshot.paramMap.get('id');
    this.load_menu();
  }

  async load_menu() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.dbService.getRestaurantMenu(this.store_id).subscribe(res => {
      for (var key in res) {
          var value = res[key];
          this.menu.push(value);
        }
        loading.dismiss();
    }); 
  }

  home() {
    this.router.navigate(['/home']);
  }

  async openItemModal(item) {
    const modal = await this.modalController.create({
        component: ItemPage,
        componentProps: item,
    });

    modal.onDidDismiss()
      .then((data) => {
        if (data) {
          const navigationExtras = data['data'];
          this.router.navigate(['/write-order'], navigationExtras); 
        }
    });

    return await modal.present();
  }

}
