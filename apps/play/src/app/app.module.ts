import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { OneDirective } from './one.directive';
import { OnePipe } from './one.pipe';

@NgModule({
  declarations: [AppComponent, OneComponent, OneDirective, OnePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
