import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../announcement.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementsComponent implements OnInit, OnDestroy {
  posts: Announcement[] = [];
  private postsSubscription: Subscription;

  constructor(private announcementsSvc: AnnouncementsService) { }

  ngOnInit(): void {
    this.announcementsSvc.getAnnouncements();
    this.postsSubscription = this.announcementsSvc.postsChanged.subscribe((posts: Announcement[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
