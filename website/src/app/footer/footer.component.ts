import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faYoutube,
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  goTo(event) {
    if (event.type === 'click') {
      window.open('https://www.arsii.org', '_blank');
    }
  }
  constructor() { }

  ngOnInit() {
  }
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG;
  faYoutube = faYoutube;
  faTwitterSquare = faTwitterSquare;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
}
