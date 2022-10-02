import { Injectable } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Injectable({
  providedIn: 'root'
})
export class NfcService {

  payload: string;

  constructor(private nfc: NFC, private ndef: Ndef) {}

  async readNFC() {
    try {
      let tag = await this.nfc.scanNdef();
      let payload = tag.ndefMessage[0].payload;
      let message = this.nfc.bytesToString(payload);
      message = message.substring(3);
      return message;
    } catch (err) {
      console.log('Error reading tag', err);
    }
  }

  async writeNFC(payload) {
    try {
      let tag = await this.nfc.scanNdef({ keepSessionOpen: true});
      this.nfc.write([this.ndef.textRecord(payload)]);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
