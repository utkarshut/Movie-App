import { Injectable } from '@angular/core';
import { movies} from '../../assets/movie.mock-data';
@Injectable()
export class MovieDetailService {
 
  constructor() 
  { }
  getMovieDetail(){
    return movies;
  }
}
