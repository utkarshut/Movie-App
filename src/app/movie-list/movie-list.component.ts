import {NgModule} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {RouterModule,Routes} from '@angular/router';
import { MovieListService} from './movie-list.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DisplayStoreService} from '../display-store.service';
 

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[MovieListService]
})
export class MovieListComponent implements OnInit {
  private movieList:any;private chunkMovie:any=[];
  private chunkList:any=[];private search:any;
  public searchForm: FormGroup;private chunkmovieFLG:boolean=true;
  constructor(private _movieList:DisplayStoreService,private _fb: FormBuilder,private _router:Router) {
    if(this._movieList.getMovieStore()){
      this.movieData=this._movieList.getMovieStore();      
    }
    else{
      this.movieData=this._movieList.getMovieList();
      this._movieList.setMovieStore(this.movieData);
      console.log(this._movieList.getMovieStore());
    }
     this.movieData.forEach(element => {
       this.chunkMovie.push(element);
       if(this.chunkMovie.length % 3==0){
         this.chunkList.push(this.chunkMovie);
         this.chunkMovie=[];
       }
    });
    this.searchForm = this._fb.group({
      search: ['']
})
   }
  private rate="../../assets/images/rate.png";
  private movieData:any;

  ngOnInit() {
   
  }
  displayValue(movieDetails:any){
    this.chunkmovieFLG=true;
    if(movieDetails.length<3){
      this.chunkList=movieDetails;
      this.chunkmovieFLG=false;
    }
    movieDetails.forEach(element => {
      this.chunkMovie.push(element);
      if(this.chunkMovie.length % 3==0){
        this.chunkList.push(this.chunkMovie);
        this.chunkMovie=[];
      }
 });
  }
  onClick(){
     this.chunkList=[];
    let searchData=this.searchForm.controls["search"].value;
    let searchedMovie=[];
  this.movieData.forEach(element => {
        let text=element.name.toLowerCase();
        if( text.indexOf(searchData.toLowerCase()) >= 0){
          console.log(element.name);
          searchedMovie.push(element);
        }
  });
    this.displayValue(searchedMovie);
 }
 movieClick(movieID){
   this._movieList.setMovieID(movieID);
   this._router.navigate(['MovieDetail'])
 }
}
