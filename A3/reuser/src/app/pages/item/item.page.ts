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
  item_key;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    this.item_key = this.route.snapshot.paramMap.get('key');
  }

}
