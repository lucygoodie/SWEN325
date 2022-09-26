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
  cart = ['1'];

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
    return modal.present();
  }

  showOrderOption() {
    return this.cart.length > 0;
  }

  order() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.cart)
      }
    };

    this.router.navigate(['/order'], navigationExtras); // fixme has to in string format...
  }
}
