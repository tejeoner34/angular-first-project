import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HarryPotterData } from '../character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterDataService {

  fetchUrl = 'http://hp-api.herokuapp.com/api/characters'

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<HarryPotterData>(this.fetchUrl)
  } 
}
