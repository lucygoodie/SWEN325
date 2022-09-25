import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {}

  getRestaurantMenu(restaurantId: number): Observable<any> {
    // console.log(`${environment.baseUrl}/test`);
    return this.http.get(`${environment.baseUrl}/restaurants/${restaurantId}/menu.json`);
  }
}
