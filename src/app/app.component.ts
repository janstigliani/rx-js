import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './services/reddit.service';
import { Post } from './interfaces/post';
import { HomeComponent } from "./components/home/home.component";
import { SlaveComponent } from "./components/slave/slave.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SlaveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // service = inject(RedditService);
  posts:Post[] = [];

  constructor(private service:RedditService) {
  //  this.service.getData().subscribe({
  //   next: data=>console.log(data),
  //   error: err => console.log(err),
  //  });
  this.service.getData().subscribe(data=> this.posts = data);
  }
}
