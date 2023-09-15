import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';
import { RouteResolver } from './resolvers/route.resolver';
import { DetailsResolver } from './resolvers/details.resolver';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      routeResolver: RouteResolver,
    },
    canActivate: [AuthGuard],
  },
  { path: 'upload', component: UploadComponent, canActivate: [AuthGuard] },
  {
    path: 'details/:name',
    component: DetailsComponent,
    resolve: {
      routeResolver: DetailsResolver,
    },
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: UploadComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
