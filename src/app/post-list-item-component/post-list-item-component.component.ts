import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/model/postModel';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post : PostModel;

  constructor() { }

  ngOnInit() {
  }

  onBtnLoveItClick(){
    this.post.loveCount++;
  }

  onBtnDontLoveItClick(){
    this.post.dontLoveCount++;
  }
}
