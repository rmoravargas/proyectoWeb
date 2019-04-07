import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SiteInformationComponent } from './components/site-information/site-information.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MaintenanceNewsListComponent } from './components/maintenance-news-list/maintenance-news-list.component';
import { MaintenanceNewsUpsetComponent } from './components/maintenance-news-upset/maintenance-news-upset.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'site/:id', component: SiteInformationComponent},
    {path: 'user-profile/:id', component: UserProfileComponent},
    {path: 'mainte-news-list', component: MaintenanceNewsListComponent},
    {path: 'mainte-news-up/:id', component: MaintenanceNewsUpsetComponent},
    {path: 'mainte-news-set', component: MaintenanceNewsUpsetComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}

  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
