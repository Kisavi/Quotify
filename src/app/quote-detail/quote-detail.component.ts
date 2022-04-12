import { Component, OnInit, Input } from '@angular/core';
//import hhtpclient
import { HttpClient } from '@angular/common/http';
// import Quote class
import { Quote } from '../quote-class/quote';

//import QuoteServiceRequest
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  // create a property quote and assign it type Quote
  quote!: Quote;

  constructor(private http: HttpClient,private quoteService:QuoteRequestService) { }

  ngOnInit(): void {}

  showQuote() {
    // interface ApiResponse {
    //   author: string;
    //   quote: string;
    // }

    // this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data => {
    //   // only executed when the request to the API is succesful.
    //   this.quote = new Quote(data.author, data.quote)
    // }, err=> { //executes when an error occurs
    //   this.quote = new Quote("Winston Churchill","Never ever give up!")
    // })

    //use of service
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

}
