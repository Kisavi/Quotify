import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  isShowDiv = true;
  getQuote() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit(): void {
  }

}
