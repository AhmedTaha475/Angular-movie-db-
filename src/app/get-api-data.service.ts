import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  constructor(private _HttpClient: HttpClient, private _ActivatedRoute: ActivatedRoute) { }

  getTreding(media_type: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=1769577e785f28a324b660042cece5f2`)
  }

  getDetails(media: any, id: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=1769577e785f28a324b660042cece5f2&language=en-US`)
  }
  getsearch(query: any): Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=1769577e785f28a324b660042cece5f2&language=en-US&query=${query}&page=1&include_adult=false`)
  }

}
