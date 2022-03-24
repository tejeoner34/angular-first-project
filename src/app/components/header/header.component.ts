import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isPlaying: boolean = false
  audio = new Audio("assets/music/Harry Potter Theme Song.mp3")

  constructor() { }

  ngOnInit(): void {
  }

  playAudio() {

    if(!this.isPlaying){
      this.audio.play()
      this.isPlaying = true
      this.audio.loop = true
    }else{
      this.audio.pause()
      this.isPlaying = false
    }
    
    
};

}
