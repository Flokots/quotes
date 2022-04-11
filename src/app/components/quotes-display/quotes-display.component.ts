import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { QuotesDetailsComponent } from '../quotes-details/quotes-details.component';

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Life isn\'t about getting and having, it\'s about giving and being.', 'Kevin Kruse', 'Kevin Kruse'),
    new Quote(2, 'Whatever the mind of man can conceive and believe, it can achieve.', 'Napoleon Hill', 'Napoleon Hill'),
    new Quote(3, 'Strive not to be a success, but rather to be of value.', 'Albert Einstein', 'Albert Einstein'),
    new Quote(4, 'Two roads diverged in a wood, and I - I took the one less traveled by, and that has made all the difference.', 'Robert Frost', 'Robert Frost'),
    new Quote(5, 'I attribute my success to this: I never gave or took any excuse.', 'Florence Nightingale', 'Florence Nightingale'),
    new Quote(6, 'You miss 100% of the shots you don\'t take.', 'Wayne Gretzky', 'Wayne Gretzky'),
    new Quote(7, 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over again in my life. And that is why I succeed.','Michael Jordan','Michael Jordan'),
    new Quote(8, 'Every strike brings me closer to the next home run.','Babe Ruth','Babe Ruth'),
    new Quote(9, 'Definiteness of purpose is the starting point of all achievement.','W. Clement Stone','W. Clement Stone'),
    new Quote(10, 'Life is what happens to you while you\'re busy making other plans.','John Lennon','John Lennon'),
    new Quote(11, 'We become what we think about','Earl Nightingale','Earl Nightingale'),
    new Quote(12, 'Life is 10% what happens to me and 90% of how I react to it.','Charles Swindoll','Charles Swindoll'),
  ];

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {
  }

}
