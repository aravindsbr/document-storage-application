import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  fileDetails: any;
  filesList: any = [];
  basePath: string = '/uploads';
  isUploadSuccess: boolean | undefined;

  constructor(private storage: AngularFireStorage) {}

  setFileInfo(event: any) {
    this.fileDetails = event.target.files[0];
  }

  handleFileUpload(fileInfo: any) {
    const filePath = `${this.basePath}/${fileInfo.name}`;
    this.storage
      .upload(filePath, fileInfo)
      .then(() => {
        this.isUploadSuccess = true;
      })
      .catch((error) => {
        this.isUploadSuccess = false;
      });
  }
}
