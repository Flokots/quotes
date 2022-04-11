import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  name: string = '';
  newQuote = new Quote(0, '', '', '')
  constructor() { }

  ngOnInit(): void {
  }

}
