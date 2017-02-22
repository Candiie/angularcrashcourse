import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';   //When import here need to incluse at NgModule below

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //need to declare the import here also
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
