import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

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

  constructor(private navParams: NavParams, public modalController: ModalController) {}

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

  dismiss() {
    this.modalController.dismiss();
  }

  addToOrder() {
    let item = {
      "title": this.title,
      "price": this.price,
      "change": this.change,
    };
    this.modalController.dismiss(item);
  }
}
