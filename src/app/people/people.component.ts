import { Component, OnInit } from '@angular/core';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople: any[] = [];
  constructor(private _GetApiDataService: GetApiDataService) {

    _GetApiDataService.getTreding("person").subscribe((data) => {
      this.trendingPeople = data.results.filter((item: any) => {
        return item.profile_path != null
      })

    })
  }
  ngOnInit(): void {
  }

}
