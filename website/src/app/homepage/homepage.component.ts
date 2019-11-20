import { Component, OnInit } from '@angular/core';
import{
  faConciergeBell,
  faUtensils,
  faBirthdayCake,
  faHotel,
  faUserTie,
  faChalkboardTeacher,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import{
  faMap
} from '@fortawesome/free-regular-svg-icons';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myNb1: Number;
  myNb2: Number;
  myNb3: Number;
  myNb4: Number;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    $('.slider').slider({
      interval: 3000,
      height : 500,
      indicators:false
    });
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 3000);
    
    $('.collapsible').collapsible();
    $('.parallax').parallax();
  }
  onInViewportChange1(inViewport: boolean) {
    inViewport ? this.myNb1 = 4652 : this.myNb1 = 1;
  }
  onInViewportChange2(inViewport: boolean) {
    inViewport ? this.myNb2 = 6848 : this.myNb2 = 1;
  }
  onInViewportChange3(inViewport: boolean) {
    inViewport ? this.myNb3 = 7651 : this.myNb3 = 1;
  }
  onInViewportChange4(inViewport: boolean) {
    inViewport ? this.myNb4 = 3548 : this.myNb4 = 1;
  }
  
  faConciergeBell=faConciergeBell;
  faUtensils= faUtensils;
  faBirthdayCake = faBirthdayCake;
  faHotel=faHotel;
  faMap=faMap;
  faUserTie=faUserTie;
  faChalkboardTeacher=faChalkboardTeacher;
  faBook=faBook;
}
