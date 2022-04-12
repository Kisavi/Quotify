import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: QuoteComponent},
  { path: 'contact-form', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
