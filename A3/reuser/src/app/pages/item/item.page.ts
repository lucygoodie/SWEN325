import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  item_id;
  item_details;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let title = this.route.snapshot.paramMap.get('title');
    console.log(title);

    let price = this.route.snapshot.paramMap.get('price');
    console.log(price);

    let options = this.route.snapshot.paramMap.get('options');
    console.log(options);
  }

}
