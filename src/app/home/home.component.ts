import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../get-api-data.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any[] = [];
  trendingTvShow: any[] = [];
  constructor(private _GetApiDataService: GetApiDataService, private spinner: NgxSpinnerService) {
    this.spinner.show();
    _GetApiDataService.getTreding("all").subscribe((data) => {
      this.trendingMovies = data.results.filter((item: any) => {
        this.spinner.hide();
        return item.media_type == "movie";
      })
    })
    _GetApiDataService.getTreding("all").subscribe((data) => {
      this.trendingTvShow = data.results.filter((item: any) => {
        return item.media_type == "tv";
      })
    })
  }

  ngOnInit(): void {
  }

}
