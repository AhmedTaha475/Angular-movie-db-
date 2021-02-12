import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: any;
  searchData: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _GetApiDataService: GetApiDataService) {

    this._ActivatedRoute.paramMap.subscribe(check => {
      this.query = check.get("query");
      console.log(this.query);
      _GetApiDataService.getsearch(this.query).subscribe((data) => {
        this.searchData = data.results.filter((item: any) => {
          return item.poster_path != null;
        })

      })
    })

  }

  ngOnInit(): void {
  }

}
