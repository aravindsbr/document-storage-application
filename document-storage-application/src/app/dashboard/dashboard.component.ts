import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listOfFiles: Array<any> = [];
  constructor(
    private storage: AngularFireStorage,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      this.listOfFiles = data['routeResolver'];
    });
  }
}
