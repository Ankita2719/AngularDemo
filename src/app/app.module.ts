import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalesComponent } from './digitales/digitales.component';
import { MobileComponent } from './mobile/mobile.component';
import { WebsiteComponent } from './website/website.component';
import { FacebookComponent } from './facebook/facebook.component';
import { MessageComponent } from './message/message.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalesComponent,
    MobileComponent,
    WebsiteComponent,
    FacebookComponent,
    MessageComponent,
    HeadSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
