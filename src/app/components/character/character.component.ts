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
  hasImage: boolean = false
  displayPopup: boolean = false



  constructor() { }

  ngOnInit(): void {

    this.character.image === ""? this.hasImage = false: this.hasImage = true

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

    if(this.character.house === 'Gryffindor') this.houseColor={color: '#950606'}
    if(this.character.house === 'Ravenclaw') this.houseColor={color: '#274462'}
    if(this.character.house === 'Slytherin') this.houseColor={color: '#234e25'}
    if(this.character.house === 'Hufflepuff') this.houseColor={color: '#FFB300'}

  }

  closePopup(){
    this.displayPopup = false
  }

  openPopup(){
    this.displayPopup = true
  }

}
