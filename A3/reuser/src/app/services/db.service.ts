import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {}

  // getRestaurantMenu(restaurantId: number): Observable<any> {
  //   return this.http.get(`${environment.baseUrl}/movie/popular?apikey=${environment}`); // fixme design a real api
  // }
}
