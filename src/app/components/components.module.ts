import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesComponent } from './quotes/quotes.component';
import { IonicModule } from '@ionic/angular';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [QuotesComponent, QuoteDetailsComponent, FormComponent, QuoteComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [QuotesComponent, QuoteDetailsComponent, FormComponent, QuoteComponent]
})
export class ComponentsModule { }
