import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesComponent } from './quotes/quotes.component';
import { IonicModule } from '@ionic/angular';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [QuotesComponent, QuoteDetailsComponent, FormComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [QuotesComponent, QuoteDetailsComponent, FormComponent]
})
export class ComponentsModule { }
