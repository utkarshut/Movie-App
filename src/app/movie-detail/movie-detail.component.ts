import { Component, OnInit } from '@angular/core';
import { MovieDetailService} from './movie-detail.service';
import {DisplayStoreService} from '../display-store.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[MovieDetailService]
})
export class MovieDetailComponent implements OnInit {
  private movieId:any;private selectedMovie:any;
  private rate="../../assets/images/rate.png";
  constructor(private _movie:MovieDetailService,private _display:DisplayStoreService) { 
  let moviDetail=this._movie.getMovieDetail()
  moviDetail.forEach(element => {
    if(element.id==this._display.getMovieID()){
      console.log(element);
      this.selectedMovie=element;
    }
  });
    
  }
  
  ngOnInit() {
  }

}
