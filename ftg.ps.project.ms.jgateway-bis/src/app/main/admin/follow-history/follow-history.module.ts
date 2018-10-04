import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { FollowHistoryComponent } from './follow-history.component';
import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { SaveComponent } from './save/save.component';
import { OrderComponent } from './order/order.component';
import { NotationsComponent } from './notations/notations.component';
import { DepositComponent } from './deposit/deposit.component';
import { DemandManagementComponent } from './demand-management/demand-management.component';
import { AuctionComponent } from './auction/auction.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CreditComponent } from './credit/credit.component';
import { LoanComponent } from './loan/loan.component';


export const routes = [
  { 
      path: '', 
      component: FollowHistoryComponent, children: [
          { path: '', redirectTo: 'option1', pathMatch: 'full' },
          { path: 'option1', component: Option1Component, data: {  breadcrumb: 'Option1' } },
          { path: 'option2', component: Option2Component, data: {  breadcrumb: 'Option1' } },
          { path: 'order', component: OrderComponent, data: {  breadcrumb: 'Order' } },
          { path: 'save', component: SaveComponent, data: {  breadcrumb: 'Save' } },
          { path: 'notations', component: NotationsComponent, data: {  breadcrumb: 'Notations' } },
          { path: 'deposit', component: DepositComponent, data: {  breadcrumb: 'Deposit' } },
          { path: 'demand-management', component: DemandManagementComponent, data: {  breadcrumb: 'demand management' } },
          { path: 'auction', component: AuctionComponent, data: {  breadcrumb: 'Auction' } },
          { path: 'delivery', component: DeliveryComponent, data: {  breadcrumb: 'Delivery' } },
          { path: 'quotation', component: QuotationComponent, data: {  breadcrumb: 'Quotation' } },
          { path: 'credit', component: CreditComponent, data: {  breadcrumb: 'Credit' } },
          { path: 'loan', component: LoanComponent, data: {  breadcrumb: 'Loan' } }
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
    FollowHistoryComponent,
    Option1Component,
    Option2Component,
    SaveComponent,
    OrderComponent,
    NotationsComponent,
    DepositComponent,
    DemandManagementComponent,
    AuctionComponent,
    QuotationComponent,
    DeliveryComponent,
    CreditComponent,
    LoanComponent
    
  ]
})
export class FollowHistoryModule { }
