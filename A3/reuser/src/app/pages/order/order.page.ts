import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  order;
  title;

  constructor(private navParams: NavParams, public modalController: ModalController) {}

  ngOnInit() {
    console.log(this.title);
    // this.data=data;
    // for (var key in data) {
    //   var value = data[key];
    //   this.order.push(value);
    // }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
