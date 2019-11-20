import { Component, OnInit, OnDestroy } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { NewsfeedService } from '../../services/newsfeed.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  loading:boolean;
  faFile = faFile;
  posts: Object[];
  newsSub: Subscription;
  config={
    itemsPerPage:6,
    currentPage:1
  }
  constructor(
    private newsFeed: NewsfeedService
  ) {


  }
  ngOnInit() {
    this.loading=true;
    this.newsSub = this.newsFeed.allNews$.subscribe(
      (news) => {
        if (news.length>0){
          this.loading=false;
        }
        news.reverse();
        this.posts = news;
      }
    )
    this.newsFeed.getData();
  }
  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }
}
