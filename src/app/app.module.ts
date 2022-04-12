import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//makes it available everywhere in the app
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
// progress bar
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDetailComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //here too                                        
    HttpClientModule,
    //progress bar
    // NgProgressModule,
    // NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
