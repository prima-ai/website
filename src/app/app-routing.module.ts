import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutComponent },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
