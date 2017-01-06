import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import your library
import { HiveModule } from 'hive-4-apps';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HiveModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
