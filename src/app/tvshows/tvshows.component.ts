import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../get-api-data.service';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {


  trendingTvShows: any[] = [];
  constructor(private _GetApiDataService: GetApiDataService) {

    _GetApiDataService.getTreding("tv").subscribe((data) => {
      this.trendingTvShows = data.results
      console.log(this.trendingTvShows)
    })
  }
  ngOnInit(): void {
  }

}
