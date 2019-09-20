import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesComponent } from './quotes/quotes.component';
import { IonicModule } from '@ionic/angular';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [QuotesComponent, QuoteDetailsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [QuotesComponent, QuoteDetailsComponent]
})
export class ComponentsModule { }
