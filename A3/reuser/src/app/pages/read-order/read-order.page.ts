import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NfcService } from 'src/app/services/nfc.service';
import { OrderPage } from '../order/order.page';

@Component({
  selector: 'app-read-order',
  templateUrl: './read-order.page.html',
  styleUrls: ['./read-order.page.scss'],
})
export class ReadOrderPage implements OnInit {

  constructor(private nfcService: NfcService, private modalController: ModalController) { }

  ngOnInit() {
  }

  scan() {

    let order;
    this.nfcService.readNFC().then( res => {

      console.log('In the scan() function in Read-Order');

      console.log(res);
      this.openOrderModal(order);
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
