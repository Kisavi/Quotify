import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  //property for our submitted form
  public email = '';
  public message = '';


  constructor() { }

  ngOnInit(): void {
  }

submitForm() {
  alert("Your message has been received")
}

}
