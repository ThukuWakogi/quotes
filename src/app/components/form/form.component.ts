import { Component, OnInit } from '@angular/core'

import { Quote } from 'src/app/models/quote/quote'
import { QuotesService } from 'src/app/services/quote/quotes.service'
import { isValid } from 'date-fns'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  newQuote = new Quote('', '', null)

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {}

  onSubmit() {
    console.log('this.newQuote', this.newQuote)
    this.quotesService.addQuote(this.newQuote)
    // this.newQuote = new Quote('', '', null)
  }

  isDateValid(): boolean {
    return isValid(this.newQuote.date)
  }
}
