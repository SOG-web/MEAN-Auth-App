import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuard } from './services/route-gaurd.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [RouteGuard],
  },
  { path: 'login', component: LoginComponent, canDeactivate: [RouteGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouteGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [RouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
