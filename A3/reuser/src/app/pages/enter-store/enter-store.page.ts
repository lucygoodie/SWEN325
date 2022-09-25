import { Component, OnInit } from '@angular/core';
import { NfcService } from 'src/app/services/nfc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-store',
  templateUrl: './enter-store.page.html',
  styleUrls: ['./enter-store.page.scss'],
})
export class EnterStorePage implements OnInit {

  constructor(private nfcService: NfcService, private router: Router) { }

  ngOnInit() {
  }

  scan() {
    this.nfcService.readNFC().then( res => {
      this.router.navigate(['/store/'+res]);
    });
  }
}
