import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FilterContextService {

  private showFilters: boolean = false;
  private subject = new Subject<any>()

  constructor() { }

  toggleShowFilters():void {
    this.showFilters = !this.showFilters;
    this.subject.next(this.showFilters)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
