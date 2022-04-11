import { Component, OnInit, Input } from '@angular/core';
//import hhtpclient
import { HttpClient } from '@angular/common/http';
// import Quote class
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  // create a property quote and assign it type Quote
  quote!: Quote;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  showQuote() {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
      // only executed when the request to the API is succesful.
      this.quote = new Quote(data.author, data.quote)
    })
  }

}
