import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-read-order',
  templateUrl: './read-order.page.html',
  styleUrls: ['./read-order.page.scss'],
})
export class ReadOrderPage implements OnInit {

  constructor(private nfcService: NfcService) { }

  ngOnInit() {
  }

  scan() {
    this.nfcService.readNFC();
  }
}
