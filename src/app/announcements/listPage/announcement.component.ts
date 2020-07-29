import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../announcement.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementsComponent implements OnInit, OnDestroy {
  posts: Announcement[] = [];
  post: Announcement;
  private postsSubscription: Subscription;
  editingMode = false;
  articleId: string;

  constructor(
    private announcementsSvc: AnnouncementsService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.announcementsSvc.getAnnouncements();
    this.postsSubscription = this.announcementsSvc.postsChanged.subscribe((posts: Announcement[]) => {
      this.posts = posts;
    });
    // this.getArticle();
  }

  onEdit(article): void {
    this.post = article;
    this.articleId = article.id;
    this.editingMode = true;
  }

  getArticle(): Announcement {
    // this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    return this.announcementsSvc.getArticle(this.articleId)
    .subscribe(data => {
      this.post = data;
    });
  }

  updatePost(form: NgForm): void {
    this.announcementsSvc.updateArticle(this.articleId, form.value);
    this.editingMode = false;
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

  onDelete(article: Announcement): void {
    this.announcementsSvc.deleteArticle(article);
  }

}
