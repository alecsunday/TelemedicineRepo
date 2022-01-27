import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, RouterModule.forRoot([
    {path: '', component: AdminPageComponent},
  ])],
  declarations: [ AppComponent, HelloComponent, AdminPageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
