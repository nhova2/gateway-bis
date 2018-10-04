import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { FollowHistoryComponent } from './follow-history/follow-history.component';

export const routes = [
  { 
      path: '', 
      component: AdminComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent, data: {  breadcrumb: 'Dashboard' } },
          { path: 'statistic', component: StatisticComponent, data: {  breadcrumb: 'Statistic' } },
          { path: 'follow-history', component: FollowHistoryComponent, data: {  breadcrumb: 'Follow History' } },
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
    FollowHistoryComponent
  ]
})
export class AdminModule { }
