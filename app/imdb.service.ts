import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Movie } from './movie';

import 'rxjs/add/operator/map';

@Injectable()
export class ImdbService{

    private serviceURL = 'http://www.omdbapi.com/?s=';

    constructor(private http:Http){}

   

    search(searchText:string):Observable<Movie[]>{
        return this.http.get(this.serviceURL+searchText)
            .map(this.handleResponse);
    }

    private handleResponse(response:Response){
        let data = response.json();
        let movies:Movie[] = [];
       
        data.Search.forEach(function (searchItem:any) {
            let movie = new Movie();
            movie.title = searchItem.Title;
            movie.year = searchItem.Year;
            movie.poster = searchItem.Poster;
            movie.type = searchItem.Type;
            movie.imdbID = searchItem.ImdbID;
            movies.push(movie);

        })
        return movies;
    }

}