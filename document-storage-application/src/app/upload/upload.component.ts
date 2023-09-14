import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  fileDetails: any;

  setFileInfo(event: any) {
    this.fileDetails = event.target.files[0];
  }

  handleFileUpload() {
    if (this.fileDetails) {
      console.log('details are', this.fileDetails);
    }
  }
}
