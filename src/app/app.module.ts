import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersListComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }