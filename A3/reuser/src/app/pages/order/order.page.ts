import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  total_price;
  change;
  title;
  name;

  constructor(private navParams: NavParams, public modalController: ModalController) {}

  ngOnInit() {
    this.total_price = this.navParams.get('price');
    let change = this.navParams.get('change');
    if (change && change.cost) {
      this.total_price += change.cost;
      this.change = change.title;
    }
  }

  changes() {
    return this.change !== undefined;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
