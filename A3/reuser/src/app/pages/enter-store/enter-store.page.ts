import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-enter-store',
  templateUrl: './enter-store.page.html',
  styleUrls: ['./enter-store.page.scss'],
})
export class EnterStorePage implements OnInit {

  constructor(private nfcService: NfcService) { }

  ngOnInit() {
  }

  scan() {
    this.nfcService.readNFC();
  }
}
