import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsfeedComponent } from './homepage/newsfeed/newsfeed.component';
import { PartnatComponent } from './partnaires/partnat/partnat.component';
import { PartabrComponent } from './partnaires/partabr/partabr.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './about/contact/contact.component';
import { EventsComponent } from './about/events/events.component';
import { SpaceComponent } from './about/space/space.component';
import { AppcondComponent } from './applications/appcond/appcond.component';
import { RegistrationComponent } from './applications/registration/registration.component';
import { ContestComponent } from './applications/contest/contest.component';
import { ResultComponent } from './applications/result/result.component';
import { InitedComponent } from './education/inited/inited.component';
import { ContedComponent } from './education/conted/conted.component';
import { OffstageComponent } from './offers/offstage/offstage.component';
import { OffemplComponent } from './offers/offempl/offempl.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountUpModule } from 'countup.js-angular2';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { NewsfeedService } from './services/newsfeed.service';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { OneNewsComponent } from './news-feed/one-news/one-news.component';
import { AllNewsComponent } from './news-feed/all-news/all-news.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EducationComponent } from './education/education.component';
import { PartnairesComponent } from './partnaires/partnaires.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    NewsfeedComponent,
    PartnatComponent,
    PartabrComponent,
    OffersComponent,
    ContactComponent,
    EventsComponent,
    SpaceComponent,
    AppcondComponent,
    RegistrationComponent,
    ContestComponent,
    ResultComponent,
    InitedComponent,
    ContedComponent,
    OffstageComponent,
    OffemplComponent,
    NewsFeedComponent,
    OneNewsComponent,
    AllNewsComponent,
    EducationComponent,
    PartnairesComponent,
    ApplicationsComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CountUpModule,
    InViewportModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  
  providers: [
    NewsfeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
