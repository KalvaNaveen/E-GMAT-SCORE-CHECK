import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormComponent } from './form/form.component';
import { TotalScoreComponent } from './graphs/total-score/total-score.component';
import { QuantScoreComponent } from './graphs/quant-score/quant-score.component';
import { VerbalScoreComponent } from './graphs/verbal-score/verbal-score.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FormComponent,
    TotalScoreComponent,
    QuantScoreComponent,
    VerbalScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
