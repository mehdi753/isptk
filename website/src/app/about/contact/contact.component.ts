import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactFormControl: FormGroup;
  map={
    lat : 35.8981067,
    lng : 10.5800706
  }
  
  constructor() { }

  ngOnInit() {
    this.contactFormControl = new FormGroup({
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      nameFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3)
      ]),
      fnameFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3)
      ]),
      phoneFormControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(4)
      ]),
      msgFormControl: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
    
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.contactFormControl.controls[controlName].hasError(errorName);
  }
  onSubmitSend(){
    if (this.hasError('emailFormControl', 'email') || this.hasError('emailFormControl', 'required')
      || this.hasError('nomFormControl', 'required') || this.hasError('nomFormControl', 'pattern')
      || this.hasError('nomFormControl', 'minLength') || this.hasError('telFormControl', 'required')
      || this.hasError('telFormControl', 'minLength') || this.hasError('telFormControl', 'pattern')
      || this.hasError('msgFormControl', 'minLength') || this.hasError('msgFormControl', 'required')) {
        console.log("hello")
    }
  }
  ngAfterViewInit(){
    $('input#input_text, textarea#textarea2').characterCounter();
  }
}
