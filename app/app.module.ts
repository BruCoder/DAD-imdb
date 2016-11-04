import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ImdbMovieComponent } from './imdb-movies.component';

import { HttpModule } from '@angular/http';


import { ImdbService } from './imdb.service';

import { FormsModule }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ImdbMovieComponent ],
  providers: [ImdbService],
  bootstrap:    [ AppComponent ] 

})
export class AppModule { }
