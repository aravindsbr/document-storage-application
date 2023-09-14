import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('fileInput')
  fileElement!: ElementRef;
  isFileTypePDF!: boolean;
  isFileSizeMoreThan50kb!: boolean;

  constructor(private storage: AngularFireStorage) {}

  setFileInfo(event: any) {
    this.fileDetails = event.target.files[0];
  }

  handleFileUpload(fileInfo: any) {
    if (fileInfo.type.split('/')[1] !== 'pdf') {
      this.isFileTypePDF = false;
      return;
    }
    if (fileInfo.size / 1024 > 50) {
      this.isFileSizeMoreThan50kb = true;
      return;
    }
    const filePath = `${this.basePath}/${fileInfo.name}`;
    this.storage
      .upload(filePath, fileInfo)
      .then(() => {
        this.isUploadSuccess = true;
        this.fileElement.nativeElement.value = '';
      })
      .catch(() => {
        this.fileElement.nativeElement.value = '';
        this.isUploadSuccess = false;
      });
    this.fileDetails = null;
    this.isFileTypePDF = true;
    this.isFileSizeMoreThan50kb = false;
  }
}
