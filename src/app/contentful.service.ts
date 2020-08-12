import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

import { environment } from '../environments/environment';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getItem(contentId: string): Observable<any> {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(
      map(entry => entry.fields)
    );
  }

}
