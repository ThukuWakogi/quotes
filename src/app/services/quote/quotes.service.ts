import { Injectable } from '@angular/core';
import { Quote } from 'src/app/models/quote/quote';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotes: Quote[] = [
    new Quote(
      'The strent of di blak pantha will now be stript ewey',
      'That person holding some thick purple potion',
      new Date(2018, 1, 28)
    ),
    new Quote(
      'Omae wa mou, shindeiru',
      'Nanni',
      new Date(2014, 6, 4)
    ),
    new Quote(
      'If I have seen firther than others, it is by standing on the shoulders of giants',
      'Isaac Newton',
      new Date(2014, 6, 4)
    )
  ]
  quotesChange: Subject<Quote[]> = new Subject<Quote[]>()

  constructor() { }

  getAllQuotes(): Observable<Quote[]> {
    console.log('service invoked')
    return of([...this.quotes])
  }

  addLike(quoteIndex: number): void {
    this.quotes.forEach((quote, index) => {
      if (index === quoteIndex) {
        quote.likeCount += 1
        return
      }
    })
    this.quotesChange.next(this.quotes)
  }

  addDislike(quoteIndex: number): void {
    this.quotes.forEach((quote, index) => {
      if (index === quoteIndex) {
        quote.dislikeCount += -1
        return
      }
    })
    this.quotesChange.next(this.quotes)
  }

  deleteQuote(quoteIndex: number): void {
    this.quotes = this.quotes.filter((quote, index) => {
      return quoteIndex !== index
    })
    this.quotesChange.next(this.quotes)
  }

  addQuote(quote: Quote) {
    this.quotes.push(quote)
    this.quotesChange.next(this.quotes)
  }
}
