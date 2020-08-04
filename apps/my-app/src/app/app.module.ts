import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyPipeModule } from '@my-org/my-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
