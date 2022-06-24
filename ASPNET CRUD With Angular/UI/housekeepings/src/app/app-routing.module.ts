import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  {path: 'Dashboard', component:HomeComponent},
  {path: 'Update/:id', component:RequestComponent},
  {path: 'Request', component:RequestComponent},
  {path: 'Profile', component:ProfileComponent},
  {path: 'Feedback', component:FeedbackComponent},
  {path: 'Admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
