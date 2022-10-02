import { Component } from '@angular/core';
import { NfcService } from 'src/app/services/nfc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-store',
  templateUrl: './enter-store.page.html',
  styleUrls: ['./enter-store.page.scss'],
})
export class EnterStorePage {

  constructor(private nfcService: NfcService, private router: Router) { }

  scan() {
    this.nfcService.readNFC().then( res => {
      setTimeout(()=>{this.router.navigate(['/store/'+res])}, 3000);
    });
  }
}
