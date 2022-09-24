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

  constructor(private route: ActivatedRoute, private dbService: DbService) { }

  ngOnInit() {
    this.item_id = this.route.snapshot.paramMap.get('id');
    this.dbService.getMenuItem(this.item_id).subscribe(res => {
        for (var key in res) {
          var value = res[key];
        }
    });
  }

}
