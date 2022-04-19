import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quote!: Quote;

  constructor(private http: HttpClient) {
    this.quote = new Quote("", "");
  }

  quoteRequest() {
    interface ApiResponse {
      quote: string;
      author: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").toPromise().then((response: any) => {
        this.quote.quote = response.quote
        this.quote.author = response.author
        

        resolve(response)
      },
      error=>{
        this.quote.quote = "Never ever give up"
        this.quote.author = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
}
