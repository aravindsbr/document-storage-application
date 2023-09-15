import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  fileInfo: any = {};

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      if (data['routeResolver']) this.fileInfo = data['routeResolver'];
      console.log(this.fileInfo);
    });
  }
}
