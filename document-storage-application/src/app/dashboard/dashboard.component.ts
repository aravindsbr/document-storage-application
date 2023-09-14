import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    const ref = this.storage.ref('/uploads');
    ref.listAll().subscribe((data) => {
      let newref = this.storage.ref('/uploads/' + data.items[0].name);
      let downloadableUrl = newref.getDownloadURL().subscribe((data) => {
        console.log('1', data);
      });
      let metadata = newref.getMetadata().subscribe((data) => {
        console.log('2', data);
      });
      // for (let i = 0; i < data.items.length; i++) {
      //   let name = data.items[i].name;

      //   let newref = this.storage.ref(data.items[i].name);
      //   let url = newref.getDownloadURL().subscribe((data) => {
      //     this.filesList.push({
      //       name: name,
      //       videolink: data,
      //     });
      //     console.log('file list', this.filesList);
      //   });
      // }
    });
  }
}
