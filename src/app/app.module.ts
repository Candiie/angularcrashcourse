import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //When import here need to incluse at NgModule below

//importing the Http module
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ], //need to declare the import here also - note to self done miss this out nxt time
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
