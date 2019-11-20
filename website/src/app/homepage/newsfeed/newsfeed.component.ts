import { Component, OnInit, OnDestroy } from '@angular/core';
import {faFile} from '@fortawesome/free-regular-svg-icons'
import { NewsfeedService } from '../../services/newsfeed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  loading:boolean;
  faFile=faFile; 
  posts:Object[];
  newsSub: Subscription;
    
  constructor( 
    private newsFeed: NewsfeedService
    ) { }
  
  ngOnInit() {
    this.loading=true;
    this.newsSub = this.newsFeed.allNews$.subscribe(
      (news)=>{
        news.reverse()
        if (news.length>0){
          this.loading=false;
        }
        if(news.length<3){
          this.posts=news;
        }else{
          this.posts=[news[0],news[1],news[2]];
        }
      }
    )
    this.newsFeed.getData();
  }
  ngOnDestroy(){
    this.newsSub.unsubscribe();
  }
}
