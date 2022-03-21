import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { HarryPotterDataService } from 'src/app/services/harry-potter-data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList!: QueryList<ElementRef>;

  characters: any = [];
  charactersShown: any = [];
  charactersOriginal: any = [];
  actualLastIndex: number = 20;
  areMoreCharacters: boolean = true;
  searchValue: string = '';
  observer: any;
  isLoading: boolean = false;

  constructor(private data: HarryPotterDataService) {}

  ngOnInit() {
    this.data.getCharacters().subscribe((datos) => {
      console.log(datos);
      const firstTwentyCharacters = datos.slice(0, this.actualLastIndex);
      this.characters = firstTwentyCharacters;
      this.charactersShown = firstTwentyCharacters;
      this.charactersOriginal = datos;
    });
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    console.log(this.theLastList);
    this.theLastList.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  onSearch() {
    const filtered = this.charactersShown.filter((c: any) =>
      c.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.characters = filtered;
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.charactersOriginal.length > 20) {
          console.log(this.characters.length)
          this.isLoading = true;
          setTimeout(() => {
            const charactersToAdd = this.charactersOriginal.splice(20, 20);
            this.characters = this.characters.concat(charactersToAdd);
            this.charactersShown = this.charactersShown.concat(charactersToAdd);
            this.isLoading = false;

            console.log(this.characters)
          }, 2000);
        }
      }
    }, options);
  }
}
