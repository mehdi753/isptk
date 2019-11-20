import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  gallery = [
    { url: '../../assets/images/cover.jpg' },
    { url: '../../assets/images/cover.jpg' },
    { url: '../../assets/images/cover.jpg' },
    { url: '../../assets/images/cover.jpg' },
    { url: '../../assets/images/cover.jpg' },
    { url: '../../assets/images/cover.jpg' }
  ]
  show = [
    [
      { url: '../../assets/images/cover.jpg', caption: 'aaa' },
      { url: '../../assets/images/cover.jpg', caption: 'bbb' },
      { url: '../../assets/images/cover.jpg', caption: 'ccc' }
    ],
    [
      { url: '../../assets/images/cover.jpg', caption: 'ddd' },
      { url: '../../assets/images/cover.jpg', caption: 'eee' },
      { url: '../../assets/images/cover.jpg', caption: 'fff' }
    ],
    [
      { url: '../../assets/images/cover.jpg', caption: 'ggg' },
      { url: '../../assets/images/cover.jpg', caption: 'hhh' },
      { url: '../../assets/images/cover.jpg', caption: 'iii' }
    ],
    [
      { url: '../../assets/images/cover.jpg', caption: 'jjj' },
      { url: '../../assets/images/cover.jpg', caption: 'kkk' },
      { url: '../../assets/images/cover.jpg', caption: 'lll' }
    ]
  ]
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.carousel').carousel();
    $('.materialboxed').materialbox();

  }
}
