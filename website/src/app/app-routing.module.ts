import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PartnatComponent } from './partnaires/partnat/partnat.component';
import { PartabrComponent } from './partnaires/partabr/partabr.component';
import { ContactComponent } from './about/contact/contact.component';
import { EventsComponent } from './about/events/events.component';
import { SpaceComponent } from './about/space/space.component';
import { AppcondComponent } from './applications/appcond/appcond.component';
import { RegistrationComponent } from './applications/registration/registration.component';
import { ContestComponent } from './applications/contest/contest.component';
import { ResultComponent } from './applications/result/result.component';
import { InitedComponent } from './education/inited/inited.component';
import { ContedComponent } from './education/conted/conted.component';
import { OffemplComponent } from './offers/offempl/offempl.component';
import { OffstageComponent } from './offers/offstage/offstage.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { OneNewsComponent } from './news-feed/one-news/one-news.component';
import { AllNewsComponent } from './news-feed/all-news/all-news.component';
import { OffersComponent } from './offers/offers.component';
import { EducationComponent } from './education/education.component';
import { PartnairesComponent } from './partnaires/partnaires.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'education', component: EducationComponent, children: [
      { path: 'continuous', component: ContedComponent },
      { path: 'initial', component: InitedComponent }
    ]
  },
  {
    path: 'partnaires', component: PartnairesComponent, children: [
      { path: 'national', component: PartnatComponent },
      { path: 'abroad', component: PartabrComponent }
    ]
  },
  {
    path: 'applications', component: ApplicationsComponent, children: [
      { path: 'conditions', component: AppcondComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'contests', component: ContestComponent },
      { path: 'results', component: ResultComponent },
    ]
  },
  {
    path: 'offers', component: OffersComponent, children: [
      { path: 'internships', component: OffstageComponent },
      { path: 'jobs', component: OffemplComponent }
    ]
  },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'contact', component: ContactComponent },
      { path: 'space', component: SpaceComponent },
      { path: 'events', component: EventsComponent },
    ]
  },

  {
    path: 'newsfeed', component: NewsFeedComponent, children: [
      { path: 'all', component: AllNewsComponent },
      { path: ':id', component: OneNewsComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
