import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AlertComponent } from './alert/alert.component';

export const routes = [
  { 
      path: '', 
      component: AdminComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent, data: {  breadcrumb: 'Dashboard' } },
          { path: 'statistic', component: StatisticComponent, data: {  breadcrumb: 'Statistic' } },
          { path: 'alert', component: AlertComponent, data: {  breadcrumb: 'Alert' } }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    StatisticComponent,
    AlertComponent
  ]
})
export class AdminModule { }
