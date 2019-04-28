import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { HubComponent } from './pages/hub/hub.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hub', component: HubComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
