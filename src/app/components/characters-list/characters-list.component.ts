import { Component, OnInit } from '@angular/core';
import { HarryPotterDataService } from 'src/app/services/harry-potter-data.service';
import { Character } from 'src/app/one-character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: any = []

  constructor(private data: HarryPotterDataService) { }

  ngOnInit() {
    this.data.getCharacters()
        .subscribe( datos =>{ 
            console.log(datos)
            return this.characters = datos
        })
  }

}
