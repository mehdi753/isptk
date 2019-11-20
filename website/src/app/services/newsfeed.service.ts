import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import  {News} from '../model/news'
@Injectable({
  providedIn: 'root'
})

class Data {
  status: string;
  msg: string;
  documents: News[];
}
export class NewsfeedService {
  public allNews:Object[];
  public allNews$ = new Subject<Object[]>();
  constructor(
    private http: HttpClient
  ) { }

  getData() {
    this.http.get('http://localhost:2000/newsfeed/show').subscribe(
      (news: Data) => {
        if (news.status) {
          this.allNews= news.documents
          this.emitNews()
        } else {
          console.log(news.status);
        }
      });
  }
  getOneData(id:string){
    return new Promise((resolve, reject) => {
    this.http.get('http://localhost:2000/newsfeed/show/'+id).subscribe(
      (news: News) => {
        resolve(news);
      },(err)=>{
        reject(err)
      })
    })
  }
  emitNews() {

    this.allNews$.next(this.allNews);
    
  }
}
