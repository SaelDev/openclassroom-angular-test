import { Component } from '@angular/core';
import { PostModel } from 'src/app/model/postModel';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';

  posts : PostModel[] = [
    new PostModel('My first post', 'lorempispum', 1),
    new PostModel('My second post', 'lorempispum', -5),
  ]
}
