import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyPipeModule } from '@my-org/my-lib';

import { AppComponent } from './app.component';
import { MyPaPipeModule } from '@myorg/my-pa-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyPipeModule, MyPaPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
