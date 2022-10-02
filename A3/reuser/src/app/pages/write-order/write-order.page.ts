import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NfcService } from 'src/app/services/nfc.service';

@Component({
  selector: 'app-write-order',
  templateUrl: './write-order.page.html',
  styleUrls: ['./write-order.page.scss'],
})
export class WriteOrderPage implements OnInit {

  item;
  name: string;
  price;
 
  constructor(private route: ActivatedRoute, private nfcService: NfcService, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.item) {
        this.item = JSON.parse(params.item);
        this.price = this.item.price;

        if (this.item.change !== undefined) {
          console.log(this.item.change);
          this.price += this.item.change.cost;
        }
      }
    });
  }

  changes() {
    return this.item.change !== undefined;
  }

  disableButton() {
    return this.name === undefined || this.name.length<1;
  }

  write() {
    this.item["name"] = this.name; 
    console.log(this.item);
    if (this.nfcService.writeNFC(JSON.stringify(this.item))) {
      setTimeout(()=>{this.router.navigate(['/home'])}, 5000);
    }
  }

  home() {
    this.router.navigate(['/home']);
  }
}
