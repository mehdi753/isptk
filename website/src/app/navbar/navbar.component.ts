import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdowns: any;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 992) {
      $('.sidenav-overlay').trigger('click');
    }
  }
  ngOnInit() {
    this.dropdowns = [
      { id: "1" },
      { id: "2" }
    ];
    var selector1 = '.nav-wrapper li';
    var selector2 = '.sidenav li';
    $(selector1).on('click', function () {
      $(selector1).removeClass('active');
      $(this).addClass('active');
    });
    $(selector2).on('click', function () {
      $(selector2).removeClass('active');
      $(this).addClass('active');
    });
  }

  ngAfterViewInit() {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    
  }
}
