import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  data: any;
 
  constructor(private route: ActivatedRoute, private nfcService: NfcService, private router: Router) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });


    console.log(this.data);
  }

  write() {
    this.nfcService.writeNFC(this.data[0]);
  }

}
