import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDisplayComponent } from './components/quotes-display/quotes-display.component';
import { QuotesDetailsComponent } from './components/quotes-details/quotes-details.component';
import { QuotesFormComponent } from './components/quotes-form/quotes-form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesDisplayComponent,
    QuotesDetailsComponent,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
