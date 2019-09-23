import { Component, OnInit } from '@angular/core'

import { Quote } from 'src/app/models/quote/quote'
import { QuotesService } from 'src/app/services/quote/quotes.service'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[]
  quoteIndex: number
  onQuotesChange: any

  constructor(private quotesService: QuotesService) {
    console.log('hahaahah')
    this
      .quotesService
      .quotesChange
      .subscribe(quotes => {
        this.quotes = quotes
      })
  }

  ngOnInit() {
    console.log('kakak')
    this
      .quotesService
      .getAllQuotes()
      .subscribe(quotes => {
        console.log({quotes})
        this.quotes = quotes
      })
  }

}
