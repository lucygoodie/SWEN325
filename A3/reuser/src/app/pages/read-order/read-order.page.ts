import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NfcService } from 'src/app/services/nfc.service';
import { OrderPage } from '../order/order.page';

@Component({
  selector: 'app-read-order',
  templateUrl: './read-order.page.html',
  styleUrls: ['./read-order.page.scss'],
})
export class ReadOrderPage {

  constructor(private nfcService: NfcService, private modalController: ModalController, private router: Router) { }

  scan() {
    this.nfcService.readNFC().then( res => {
      setTimeout(()=>{this.openOrderModal(JSON.parse(res))}, 3000);
    });
  }

  async openOrderModal(order) {
    const modal = await this.modalController.create({
        component: OrderPage,
        componentProps: order,
    });

    return modal.present();
  }
}
