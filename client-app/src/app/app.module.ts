import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { BooksComponent } from './books/books.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
let routes:Routes = [
  {path:"",component:BooksComponent},
  {path:"detail/:id",component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatigoriesComponent,
    BooksComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
