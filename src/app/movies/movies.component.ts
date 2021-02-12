import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {


  trendingMovies: any[] = [];
  constructor(private _GetApiDataService: GetApiDataService) {

    _GetApiDataService.getTreding("movie").subscribe((data) => {
      this.trendingMovies = data.results
      console.log(this.trendingMovies)
    })
  }

  ngOnInit(): void {
  }

}
