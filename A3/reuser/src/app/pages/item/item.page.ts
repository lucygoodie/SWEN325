import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  title;
  price;
  options_list = [];
  change = {};

  constructor(private navParams: NavParams, public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    let data = this.navParams.get('options')
    for (var key in data) {
      var value = data[key];
      this.options_list.push(value);
    }
  }

  onChange(option) {
    this.change = {
      "title": option.title,
      "cost": option.cost,
    };
  }

  changes() {
    return this.options_list.length>0;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  order() {
    let item = {
      "title": this.title,
      "price": this.price,
      "change": this.change,
    };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        item: JSON.stringify(item)
      }
    };
    this.modalController.dismiss(navigationExtras);
  }
}

