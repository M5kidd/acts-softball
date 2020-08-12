import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: Observable<any>;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.about = this.contentfulService.getItem('1MF8rngEhmfeTFy1Rqwb09');
  }

  returnHtmlFromRichText(richText): any {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
}

}
