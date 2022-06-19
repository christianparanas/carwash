import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './pages/admin/dash/dash.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { BookComponent } from './pages/book/book.component';

import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'plan/:plan', component: BookComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin', component: DashComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
