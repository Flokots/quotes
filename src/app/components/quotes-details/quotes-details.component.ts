import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/model/quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input()
  quote!: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
