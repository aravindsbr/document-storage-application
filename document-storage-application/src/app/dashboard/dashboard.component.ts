import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandlingService } from './../file-handling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listOfFiles: Array<any> = [];
  constructor(
    private storage: AngularFireStorage,
    private actRoute: ActivatedRoute,
    private fileHandlingService: FileHandlingService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      if (data) this.listOfFiles = data['routeResolver'];
    });
  }

  getOneFileInfo(fileName: string) {
    this.route.navigate(['/details/' + fileName]);
  }
}
