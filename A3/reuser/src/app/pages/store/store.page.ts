import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  store_id;
  menu = [];

  constructor(private route: ActivatedRoute, private dbService: DbService, private loadingCtrl: LoadingController,  private router: Router) { }

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
          value['key'] = key;
          this.menu.push(value);
        }
        loading.dismiss();
    }); 
  }
  
  openItem(item) {
    this.router.navigate(['/item/'+item.id, {"key": item.key}]);
  }
}
