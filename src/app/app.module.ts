import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdyenComponentComponent } from './adyen-component/adyen-component.component';
import { PaymentWidgetComponent } from './payment-widget/payment-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    AdyenComponentComponent,
    PaymentWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
