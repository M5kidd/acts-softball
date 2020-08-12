import { Component, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Observable } from 'rxjs';

import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions: Observable<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.missions = this.contentfulService.getItem('2MzAmHDyq4hVMSEBpSweeW');
  }

  returnHtmlFromRichText(richText): any {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}

}
