import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/couter.module';
import { HeroModule } from './heroes/hero.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
