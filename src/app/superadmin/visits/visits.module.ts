import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsComponent } from './visits.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes = [
  { path: '', component:VisitsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [VisitsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ]
})
export class VisitsModule { }
