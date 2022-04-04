import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component'
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './components/popup/popup.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AboutComponent } from './pages/about/about.component';
import { TestPipe } from './test.pipe';

const appRoutes: Routes = [
  {path: "", component: CharactersListComponent},
  {path: "about", component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersListComponent,
    CharacterComponent,
    PopupComponent,
    LoaderComponent,
    AboutComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
