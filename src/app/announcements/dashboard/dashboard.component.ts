import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  filePath: string;

  constructor(private announceSvc: AnnouncementsService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  // onCancel(): void {
  //   if (this.filePath) {
  //     console.log(this.filePath);
  //     console.log(this.storage.storage.refFromURL(this.filePath));
  //   }
  // }

  onUpload(event: any): void {
    const file = event.target.files[0];
    const currentDate = Date.now();
    const fileName = file.name;
    this.filePath = 'images/' + currentDate + '_' + fileName;
    const fileRef = this.storage.ref(this.filePath);
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only Image Files are Accepted');
    } else {
      const task = this.storage.upload(this.filePath, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
          finalize(() => fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;
          })
          )
       )
      .subscribe();
    }
  }

  onSubmit(form: NgForm): void  {
    const createdArticle = {
      ...form.value,
      image: this.downloadURL,
      date: new Date().toISOString(),
    };
    this.announceSvc.storeNewArticle(createdArticle);
  }

}
