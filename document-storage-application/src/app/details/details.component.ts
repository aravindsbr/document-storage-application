import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  fileInfo: Array<any> = [];

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actRoute.data.subscribe((data) => {
      if (data['routeResolver']) {
        this.fileInfo = data['routeResolver'];
      }
    });
  }

  getFormattedFileSize(fileSize: any) {
    return (fileSize / 1024).toFixed(2);
  }

  getFileType(contentType: string) {
    return contentType.split('/')[1];
  }
}
