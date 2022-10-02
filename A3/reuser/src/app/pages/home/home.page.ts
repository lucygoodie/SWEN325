import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  type = '/enter-store';

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate([this.type]);
  }
}
