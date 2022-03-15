import { Component, OnInit } from '@angular/core';
import { HarryPotterDataService } from 'src/app/services/harry-potter-data.service';
import { Character } from 'src/app/one-character';
import { filter } from 'rxjs';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: any = []
  charactersOriginal: any = []
  searchValue:string =""

  constructor(private data: HarryPotterDataService) { }

  ngOnInit() {
    this.data.getCharacters()
        .subscribe( datos =>{ 
            console.log(datos)
            this.characters = datos
            this.charactersOriginal = datos
        })
  }

  onSearch(){
    const filtered = this.charactersOriginal.filter((c:any)=> c.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    this.characters = filtered
  }

}
