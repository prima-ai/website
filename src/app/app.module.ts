import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HubComponent } from './pages/hub/hub.component';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/hub/users/profile/profile.component';
import { FeaturedComponent } from './pages/hub/partials/featured/featured.component';
import { ExploreComponent } from './pages/hub/partials/explore/explore.component';
import { AppPreviewComponent } from './pages/hub/partials/app-preview/app-preview.component';
import { SignupComponent } from './pages/hub/users/signup/signup.component';
import { SigninComponent } from './pages/hub/users/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    HubComponent,
    GetstartedComponent,
    BlogComponent,
    ProfileComponent,
    FeaturedComponent,
    ExploreComponent,
    AppPreviewComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
