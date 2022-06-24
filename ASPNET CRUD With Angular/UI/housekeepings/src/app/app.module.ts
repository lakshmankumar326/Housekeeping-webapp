import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      HomeComponent,
      RequestComponent,
      ProfileComponent,
      FeedbackComponent,
      AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     Ng2SearchPipeModule,
     MatToolbarModule,
     BrowserAnimationsModule,
     MatButtonModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
