import { Injectable } from '@angular/core';
import { movies} from '../assets/movie.mock-data';
@Injectable()
export class DisplayStoreService {
  private movieID:any;
  private movieDta:any;
  constructor() { }

  getMovieList()
  { movies.forEach(element => {
    element.img ="../../assets/images/movie-covers/"+element.img;   
  });
    return movies;
  }
  setMovieStore(movie:any){
   this.movieDta=movie;
  }
  getMovieStore(){
    return this.movieDta;
  }
  setMovieID(ID:any){
    this.movieID=ID;
  }
  getMovieID(){
   return this.movieID;
  }
}
