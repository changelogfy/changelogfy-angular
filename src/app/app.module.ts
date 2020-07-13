import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangelogfyModule } from 'changelogfy'; // <-- import the RatifyModule from ratify library we built

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChangelogfyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
