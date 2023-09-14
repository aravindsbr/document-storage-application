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
    ref.listAll().subscribe((data: any) => {
      for (let i = 0; i < data.items.length; i++) {
        let newref = this.storage.ref('/uploads/' + data.items[i].name);
        newref.getMetadata().subscribe((data) => {
          console.log('1', data);
        });
        newref.getDownloadURL().subscribe((data) => {
          console.log('2', data);
        });
      }
    });
  }
}
