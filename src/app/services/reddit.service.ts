import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  url= "https://www.reddit.com/r/Warhammer40k.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]> {
    // return fetch(this.url).then(res => res.json());
    return this.http.get<any>(this.url).pipe(
      map(data => data.data.children),
      map(Children => Children.map((child:any) => child.data))
    )
  }
}
