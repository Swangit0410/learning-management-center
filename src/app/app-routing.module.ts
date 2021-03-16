import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'core-features', component: FeaturesComponent },
  { path: 'solutions', component: SolutionsComponent }, 
  { path: 'whats-new', component: WhatsnewComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'dashboard/home', component: DashboardComponent },
  { path: 'dashboard/users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
