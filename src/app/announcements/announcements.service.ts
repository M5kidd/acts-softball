import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  postsChanged = new Subject<Announcement[]>();

  constructor(private db: AngularFirestore, private route: Router) { }

  storeNewArticle(article: Announcement): void {
    this.db.collection('posts').add(article);
    this.route.navigate(['']);
  }

  getAnnouncements(): any {
    // this.uiService.loadingStateChanged.next(true);
    this.db
    .collection('posts')
    .snapshotChanges()
    .pipe(
      map((docArray: any) => {
      return docArray.map(doc => {
        const data: any = doc.payload.doc.data();
        const dateFormated = data.date;
        return {
          // id: doc.payload.doc.id,
          title: data.title,
          // author: data.author,
          content: data.content,
          img: data.image,
          date: dateFormated,
        };
      });
    }))
    .subscribe((posts: Announcement[]) => {
      this.postsChanged.next(posts);
    });
    }
}
