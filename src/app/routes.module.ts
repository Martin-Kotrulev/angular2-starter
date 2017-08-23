import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './users/register.component';
import { AddCarComponent } from './cars/add-car.component';
import { LoginComponent } from './users/login.component';
import { PrivateRoute } from './core/private.route';

const routes: Routes = [
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  {
    path: 'cars/add',
    component: AddCarComponent,
    canActivate: [PrivateRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class RoutesModule {}
