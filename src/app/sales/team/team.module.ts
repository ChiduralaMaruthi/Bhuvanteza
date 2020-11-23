import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import { AddteamsComponent } from './addteams/addteams.component';

export const routes = [
  { path: '', component:TeamComponent, pathMatch: 'full' },
];


@NgModule({
  declarations: [TeamComponent, AddteamsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents :[AddteamsComponent]
})
export class TeamModule { }
