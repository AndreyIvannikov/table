import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './../../interface/players';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  getPlayers(url:string): Observable<Player[]> {
    return this.http
      .get<Player[]>(`api/${url}`)
  }
}
