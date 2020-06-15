import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

import { CreateCustomerComponent } from './components/dashboard/customer/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './components/dashboard/customer/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/dashboard/customer/update-customer/update-customer.component';
import { StatusCustomerComponent } from './components/dashboard/customer/status-customer/status-customer.component';

import { CreateAccountComponent } from './components/dashboard/account/create-account/create-account.component';
import { DeleteAccountComponent } from './components/dashboard/account/delete-account/delete-account.component';
import { StatusAccountComponent } from './components/dashboard/account/status-account/status-account.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customer/create', // child route path
        component: CreateCustomerComponent // child route component that the router renders
      },
      {
        path: 'customer/delete',
        component: DeleteCustomerComponent // another child route component that the router renders
      },
      {
        path: 'customer/update',
        component: UpdateCustomerComponent // another child route component that the router renders
      },
      {
        path: 'customer/status',
        component: StatusCustomerComponent // another child route component that the router renders
      },
      {
        path: 'account/create', // child route path
        component: CreateAccountComponent // child route component that the router renders
      },
      {
        path: 'account/delete',
        component: DeleteAccountComponent // another child route component that the router renders
      },
      {
        path: 'account/status',
        component: StatusAccountComponent // another child route component that the router renders
      }
    ]
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
