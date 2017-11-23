import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemStudentService } from './stu-data';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemStudentService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
