import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model'
import { PostsService } from './post.service'

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})

export class WindowComponent implements OnInit {
 
  loadedPosts: Post[] = [];

  @Input() latitude: string;
  @Input() longitude: string;
  @Input() keyId: string;


  @Output() deleteId = new EventEmitter<string>();

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.fetchPosts(this.latitude, this.longitude).subscribe(posts => {
      this.loadedPosts = posts;
    })
  }

  deleteThis(){
    this.deleteId.emit(this.keyId);
  }

  


}
