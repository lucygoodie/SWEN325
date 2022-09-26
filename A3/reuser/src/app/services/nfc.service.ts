import { Injectable } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';


@Injectable({
  providedIn: 'root'
})
export class NfcService {

  payload: string;

  constructor(private nfc: NFC, private ndef: Ndef) {}

  async readNFC() {
    // Read NFC Tag - iOS
    // On iOS, NFC reader session takes control from your app while scanning tags then returns a tag
    try {
      let tag = await this.nfc.scanNdef();
      let payload = tag.ndefMessage[0].payload;
      let message = this.nfc.bytesToString(payload);
      message = message.replace(/\D/g,'');
      return message;
      
    } catch (err) {
      console.log('Error reading tag', err);
    }
  }

  // write(nfcEvent) {
  //   var record = this.ndef.mimeMediaRecord('text/pg', this.payload);
  //   this.nfc.write([record]); 
  // }

  async writeNFC(payload) {

    try {
      let tag = await this.nfc.scanNdef({ keepSessionOpen: true});

      var message = [
          this.ndef.textRecord(payload)
      ];

      this.nfc.write(
          message
      );

  } catch (err) {
      console.log(err);
  }

    // this.payload = payload;
    // this.nfc.addTagDiscoveredListener(this.write, (()=>{
    //   alert('Failed to register NFC Listener');
    // }));
  }
}
