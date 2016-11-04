import { Component, Input } from '@angular/core';
import { Movie } from './movie';

@Component({
    moduleId: module.id,
    selector: 'imdb-movies',
    templateUrl: 'imdb-movies.component.html'
})
export class ImdbMovieComponent { 
    @Input()
    movies2:Movie[]
}