import { Component, OnInit } from '@angular/core';
import {AnimeShowService} from '../anime-show.service'

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.page.html',
  styleUrls: ['./type-page.page.scss'],
})
export class TypePagePage implements OnInit {

  animeSearch: any=[];

  constructor(private service:AnimeShowService) { }



  ngOnInit(): void {
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.animeSearch = data.Search;
        
      }
    );

  }
}
