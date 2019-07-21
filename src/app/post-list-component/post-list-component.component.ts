import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/model/postModel';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() posts : PostModel[];

  constructor() { }

  ngOnInit() {
  }

}
