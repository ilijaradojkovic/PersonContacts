import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {ContactmanagerModule} from "./contactmanager-app/contactmanager.module";
import {HttpClientModule} from "@angular/common/http";

const routes:Routes=[
   {path:"contactmanager",loadChildren: ()=>import("./contactmanager-app/contactmanager.module").then(m=>m.ContactmanagerModule)},
  {path:"**",redirectTo:"contactmanager"},

]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
