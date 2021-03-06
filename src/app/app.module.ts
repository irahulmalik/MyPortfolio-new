import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.componenet';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, HomeComponent, CardComponent, TimelineComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
