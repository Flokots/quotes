import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(sureDelete: boolean) {
    this.deleteQuote.emit(sureDelete);
  }
  upVoteQuote() {
    this.quote.upVotes++;
  }

  downVoteQuote() {
    this.quote.downVotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
