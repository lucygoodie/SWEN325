import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-write-order',
  templateUrl: './write-order.page.html',
  styleUrls: ['./write-order.page.scss'],
})
export class WriteOrderPage implements OnInit {

  data: any;
 
  constructor(private route: ActivatedRoute, private nfcService: NfcService, private router: Router) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  write() {
    if (this.nfcService.writeNFC(this.data[0])) {
      this.router.navigate(['/home']); // todo maybe should go back to restaurant? 
    }
  }

}
