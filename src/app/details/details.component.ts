import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  mediaType: any;
  id: any;
  detailsData: any;

  constructor(private _GetApiDataService: GetApiDataService, private _ActivatedRoute: ActivatedRoute) {
    this.mediaType = _ActivatedRoute.snapshot.paramMap.get("type");
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");

    _GetApiDataService.getDetails(this.mediaType, this.id).subscribe((data) => {
      this.detailsData = data;

    })
  }



  ngOnInit(): void {
  }

}
