import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/one-character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character!: any

  characterStyle = {}
  characterCardStyle = {}
  houseColor= {}



  constructor() { }

  ngOnInit(): void {

    this.characterStyle = {
      backgroundImage: `url("${this.character?.image}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '200px',
      height: '300px',
      borderRadius: '5px'
    }

    this.characterCardStyle = {
      backgroundImage: `url("../../assets/img/pexels-pixabay-235985.jpg")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '2px'
    }

    if(this.character.house === 'Gryffindor') this.houseColor={color: '#C40000'}
    if(this.character.house === 'Ravenclaw') this.houseColor={color: '#35679D'}
    if(this.character.house === 'Slytherin') this.houseColor={color: '#357638'}
    if(this.character.house === 'Hufflepuff') this.houseColor={color: '#FFB300'}

  }

}
