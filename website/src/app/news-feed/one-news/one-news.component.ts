import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from '../../services/newsfeed.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { News } from '../../model/news'
@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.css']
})
export class OneNewsComponent implements OnInit {
  news:Object={
    _id:String,
    img:String,
    title:String,
    content:String,
    links:String,
    dateTime:String
};
  newsSub: Subscription;
  links:String[]=['link1','link2','link3'];
  constructor(private newsFeed: NewsfeedService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.newsFeed.getOneData(params.id).then(
          (data: News) => {
            this.news = data;
          }
        )
      }
    );
  }

}
