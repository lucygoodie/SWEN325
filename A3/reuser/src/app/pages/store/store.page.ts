import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.dbService.getRestaurantMenu(99).subscribe(res => {
      console.log(res);
    }); // fixme should be a legit id
  }

}
