import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SaleService } from './sale.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { ConsultComponent } from './consult/consult.component';
@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ConsultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
