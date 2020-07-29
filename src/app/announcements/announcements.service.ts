import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  postsChanged = new Subject<Announcement[]>();
  postDoc: AngularFirestoreDocument<Announcement>;

  constructor(private db: AngularFirestore, private route: Router, private storage: AngularFireStorage) { }

  getArticle(articleId: string): any {
    // Reading individual article from database. Can cut down on reads if we get from our local stored array.
    this.postDoc = this.db.collection('posts').doc(articleId);
    return this.postDoc.valueChanges();
  }

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
          id: doc.payload.doc.id,
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

    getArticleToEdit(articleId: string): any {
      return this.db.collection('posts').doc(articleId);
    }

    updateArticle(articleId: string, formData: FormData): Announcement {
      return this.getArticleToEdit(articleId).update(formData);
    }

    deleteArticle(article: Announcement): void {
      const imageUrl: string = article.img;
      this.storage.storage.refFromURL(imageUrl).delete();
      this.getArticleToEdit(article.id).delete();
    }
}
