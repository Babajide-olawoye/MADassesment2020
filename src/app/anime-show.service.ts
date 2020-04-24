import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Service used to read in Json file
//exported file to type-page.module
export class AnimeShowService {
  constructor(private http: HttpClient) { }
  GetMovieData(): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27anime%27');
  }
}

