import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', 0, 0, new Date())
  @Output() addQuote = new EventEmitter<Quote>();

  submitGoal() {
    this.addQuote.emit(this.newQuote);

    //Reset Form
    this.newQuote = new Quote(0, '', '', '', 0, 0, new Date())
  }
  constructor() { }

  ngOnInit(): void {
  }

}
