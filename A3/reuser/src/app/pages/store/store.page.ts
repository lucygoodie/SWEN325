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
  to_order;

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

  async openItemModal(item) {
    const modal = await this.modalController.create({
        component: ItemPage,
        componentProps: item,
    });
    modal.onDidDismiss().then(
      (data) => {
        this.to_order = data['data'];
      });
    return await modal.present();
  }

  showOrderOption() {
    return this.to_order !== undefined;
  }

  order() {
    console.log(JSON.stringify(this.to_order));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.to_order)
      }
    };

    this.router.navigate(['/write-order'], navigationExtras); 
  }
}
