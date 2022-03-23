import {
  Component,
  OnInit,
  AfterViewInit,
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
  allCharacters: any = [];
  actualLastIndex: number = 20;
  areMoreCharacters: boolean = true;
  searchValue: string = "";
  houseSearch: string = "";
  observer: any;
  isLoading: boolean = false;
  isFiltering: boolean = false;

  constructor(private data: HarryPotterDataService) {}

  ngOnInit() {
    this.data.getCharacters().subscribe((datos) => {
      const firstTwentyCharacters = datos.slice(0, this.actualLastIndex);
      this.characters = firstTwentyCharacters;
      this.charactersShown = firstTwentyCharacters;
      this.charactersOriginal = datos;
      this.allCharacters = datos;
    });
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    this.theLastList.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  onSearch() {
    this.isFiltering = true;
    const filtered = this.charactersShown.filter((c: any) =>
      c.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.characters = filtered;
    if(this.searchValue === "") this.isFiltering = false
  }

  onFilterByHouse(){

    this.isFiltering = true

    if(this.houseSearch === ""){
      this.isFiltering = false
      return this.characters = this.allCharacters.slice(0, 20)
    } 

    const filtered = this.allCharacters.filter((character: any)=>{
     return character.house.toLowerCase().includes(this.houseSearch.toLowerCase())
    })

    this.characters = filtered

    if(this.houseSearch === "") this.isFiltering = false
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.isFiltering) {
        if (this.charactersOriginal.length > 20) {
          this.isLoading = true;
          setTimeout(() => {
            const charactersToAdd = this.charactersOriginal.splice(20, 20);
            this.characters = this.characters.concat(charactersToAdd);
            this.charactersShown = this.charactersShown.concat(charactersToAdd);
            this.isLoading = false;
          }, 2000);
        }
      }
    }, options);
  }
}
