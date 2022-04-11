import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//makes it available everywhere in the app
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //here too                                        
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
