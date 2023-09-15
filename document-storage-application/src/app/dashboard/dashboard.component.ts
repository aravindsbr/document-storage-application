import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listOfFiles: Array<any> = [];
  constructor(private actRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      if (data) this.listOfFiles = data['routeResolver'];
    });
  }

  getOneFileInfo(fileName: string) {
    this.route.navigate(['/details/' + fileName]);
  }
}
