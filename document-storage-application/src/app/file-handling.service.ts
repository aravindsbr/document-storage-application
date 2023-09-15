import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class FileHandlingService {
  listOfFiles: Array<any> = [];
  fileInfo: Array<any> = [];

  constructor(private storage: AngularFireStorage) {}

  getListOfFiles() {
    const ref = this.storage.ref('/uploads');
    ref.listAll().subscribe((data: any) => {
      if (data === undefined) {
        return;
      }
      for (let i = 0; i < data.items.length; i++) {
        let newref = this.storage.ref('/uploads/' + data.items[i].name);
        newref.getMetadata().subscribe((data) => {
          this.listOfFiles[i] = data;
        });
      }
    });
    return this.listOfFiles;
  }

  getOneFileInfo(fileName: string) {
    const ref = this.storage.ref('/uploads/' + fileName);
    ref.getMetadata().subscribe((data) => {
      if (!this.fileInfo.includes(data)) {
        ref.getDownloadURL().subscribe((downloadableURL) => {
          data['downloadableURL'] = downloadableURL;
          this.fileInfo[0] = data;
        });
      }
    });

    if (this.fileInfo === undefined) {
      return;
    }
    return this.fileInfo;
  }
}
