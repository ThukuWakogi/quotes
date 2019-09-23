import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote
  @Input() quoteIndex: number

  constructor() { }

  ngOnInit() {}

}
