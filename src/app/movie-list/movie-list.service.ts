import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import  'rxjs/add/operator/toPromise';



@Injectable()
export class MovieListService {
  constructor(private _http:Http) { }

}