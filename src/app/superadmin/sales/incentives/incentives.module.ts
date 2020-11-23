
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncentivesComponent } from './incentives.component';
import { PayableComponent } from './payable/payable.component';
import { PaidComponent } from './paid/paid.component';
import { ChartModule, SharedModule } from 'primeng/primeng';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


export const routes = [
  { path: '',redirectTo:'payable',pathMatch: 'full',data: { breadcrumb: '' } },
  { path: 'payable',component:PayableComponent ,data: { breadcrumb: '' } },
  { path: 'paid',component:PaidComponent ,data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [ PayableComponent, PaidComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
  ],
})
export class IncentivesModule { }
