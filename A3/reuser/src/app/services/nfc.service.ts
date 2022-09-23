import { Injectable } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(private nfc: NFC, private ndef: Ndef) {}

  async readNFC() {
    // Read NFC Tag - iOS
    // On iOS, a NFC reader session takes control from your app while scanning tags then returns a tag
    try {
      let tag = await this.nfc.scanNdef();
      console.log(JSON.stringify(tag));
    } catch (err) {
      console.log('Error reading tag', err);
    }
  }

  writeNFC() {

  }
}
