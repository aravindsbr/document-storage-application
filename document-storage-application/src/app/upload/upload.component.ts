import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  fileDetails: any;
  basePath: string = '/uploads';

  constructor(private storage: AngularFireStorage) {}
  setFileInfo(event: any) {
    this.fileDetails = event.target.files[0];
  }

  handleFileUpload(fileInfo: any) {
    const filePath = `${this.basePath}/${fileInfo.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileInfo);
    // console.log(uploadTask);
  }
}
