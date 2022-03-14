import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HarryPotterData } from '../character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterDataService {

  fetchUrl = 'https://fedeperin-harry-potter-api.herokuapp.com/db'

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<HarryPotterData>{
    return this.http.get<HarryPotterData>(this.fetchUrl)
  } 
}
