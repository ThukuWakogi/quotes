import { Component, OnInit, Input } from '@angular/core';

import { Quote } from 'src/app/models/quote/quote';
import { formatDistanceStrict } from 'date-fns'
import { QuotesService } from 'src/app/services/quote/quotes.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.scss'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote
  @Input() quoteIndex: number

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {}

  getDays(): string {
    console.log('this.quote.date', this.quote.date)
    return formatDistanceStrict(
      new Date(this.quote.date),
      new Date(),
      { unit: 'day' }
    )
  }

  onLike(): void {this.quotesService.addLike(this.quoteIndex)}

  onDislike(): void {this.quotesService.addDislike(this.quoteIndex)}

  onDelete(): void {this.quotesService.deleteQuote(this.quoteIndex)}

  getYear(): any {return new Date(this.quote.date).getFullYear()}
}
