import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubServiceService } from 'src/app/github-service.service';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
